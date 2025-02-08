//Create user models and schema

import mongoose, {model, Schema} from 'mongoose';

mongoose.connect("")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', require: true},
    authorId: {type: mongoose.Types.ObjectId, ref: 'User'}
})

export const ContentModel = model('Content', ContentSchema);
