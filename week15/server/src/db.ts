import mongoose, { Schema } from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://brainly:BsyFOKfRdrdOXcl4@cluster0.533al.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI)
.then(() => console.log('MongoDB Connected!'))
.catch((err) => console.log('Failed connection MongoDb Dabatase', err));


const UserSchema = new Schema({
    username: {
        type:       String,
        required:    true,
        unique:     true
    },
    password: { 
        type:   String,

    },
    contents: {
        type:   mongoose.Types.ObjectId,
        ref:    'Content'
    }
})

const ContentSchema = new Schema({
    type: {
        type: String,
        enum: ["Image", "Video", "Audio", "Article"],
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    tags: {
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    },
    link: {
        type: Boolean,
    },
    // linkid to share links
    linkId: {
        type:  mongoose.Types.ObjectId,
        ref: 'Link'
    }
})

const TagSchema = new Schema({
    type: String
})

const LinkSchema = new Schema({
    hash: String,
    sharable: Boolean
})

const User = mongoose.model('User', UserSchema);
const Content = mongoose.model('Content', ContentSchema);
const Tag = mongoose.model('Tag', TagSchema);
const Link = mongoose.model('Link', LinkSchema);

export { User, Content, Tag, Link};