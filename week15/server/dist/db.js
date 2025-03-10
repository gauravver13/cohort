"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Tag = exports.Content = exports.User = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://brainly:BsyFOKfRdrdOXcl4@cluster0.533al.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log('Failed connection MongoDb Dabatase', err));
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    contents: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Content'
    }
});
const ContentSchema = new mongoose_1.Schema({
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
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Tag'
    },
    link: {
        type: Boolean,
    },
    // linkid to share links
    linkId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Link'
    }
});
const TagSchema = new mongoose_1.Schema({
    type: String
});
const LinkSchema = new mongoose_1.Schema({
    hash: String,
    sharable: Boolean
});
const User = mongoose_1.default.model('User', UserSchema);
exports.User = User;
const Content = mongoose_1.default.model('Content', ContentSchema);
exports.Content = Content;
const Tag = mongoose_1.default.model('Tag', TagSchema);
exports.Tag = Tag;
const Link = mongoose_1.default.model('Link', LinkSchema);
exports.Link = Link;
