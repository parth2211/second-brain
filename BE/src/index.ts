import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { ContentModel, LinkModel, UserModel } from './db';
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';
import { random } from './utils';

const app = express();
app.use(express.json());


app.post("/api/v1/signup", async (req, res) => {
    //zod validation, hash the password
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username: username,
            password: password
        })
        res.json({
            message: "User signed up"
        })
    }  catch (e) {
        res.status(411).json({
            message: "User already exist"
        })
    }

})

app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser) {
        const token = jwt.sign({
            id: existingUser._id,
        }, JWT_PASSWORD);

        res.json({
            token
        })
    } else {
        res.json(403).json({
            message: "Incorrect creds"
        })
    }

})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;

    await ContentModel.create({
        link, 
        title,
        userId: req.body.userId,
        tags: []
    })

    res.json({
        message: "Content Added!"
    })
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    const userId = req.body.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username");
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        userId: req.body.userId
    })

    res.json({
        message: "Deleated!"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if(share) {

        try {
            const hash = random(10);
            await LinkModel.create({
                userId: req.body.userId,
                hash: hash
            }) 

            res.json({
                message: "link/" + hash
            })

        } catch(e) {
            res.json({
                messgae: "Share Link already exist"
            })
        }
        
    } else {
        await LinkModel.deleteOne({
            userId: req.body.userId
        })

        res.json({
            message: "Link removed"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink
    
    const link = await LinkModel.findOne({
        hash: hash,
    })

    if(!link) {
        res.status(411).json({
            message: "Inc input"
        })
    } else {
        const content = await ContentModel.find({
            userId: link.userId
        })

        const user = await UserModel.findOne({
            _id: link.userId
        })

        if(!user) {
            res.status(411).json({
                message: "User not found"
            })
            return;
        }

        res.json({
            username: user.username,
            content: content
        })
    }    

})

app.listen(3000)