//Create user models and schema

import mongoose, {model, Schema} from 'mongoose';

mongoose.connect("mongodb+srv://parthdhorajiya:cuIYWmb5j6qa0xQA@cluster0.hhcnv.mongodb.net/brainly")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    type: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true},
    authorId: {type: mongoose.Types.ObjectId, ref: 'User'}
})

export const ContentModel = model('Content', ContentSchema);

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true, unique: true}
})

export const LinkModel = model('Links', LinkSchema);