import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { ContentModel, UserModel } from './db';
import { JWT_PASSWORD } from './config';
import { userMiddleware } from './middleware';

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

app.post("/api/v1/brain/share", (req, res) => {
    
})

app.get("/api/v1/brain/:shareLink", (req, res) => {
    
})

app.listen(3000)