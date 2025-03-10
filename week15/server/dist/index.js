"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const middleware_1 = require("./middleware");
const db_1 = require("./db");
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//EndPoints:
const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
// TODO: Zod Validation and hash the password;
// @ts-ignore
app.post('/api/v1/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(411).json({
                message: "Error in inputs-please fill up the required details"
            });
        }
        if (username.length < 3 && username.length > 10) {
            return res.status(411).json({
                message: "Error in inputs-username"
            });
        }
        if (!(validPassword.test(password))) {
            return res.status(411).json({
                message: "Error in inputs-password"
            });
        }
        // db check 
        //db-call and save
        let user = yield db_1.User.findOne({ username });
        if (user) {
            return res.status(403).json({
                message: "User already exist, retry with differnet username!"
            });
        }
        user = yield db_1.User.create({ username, password });
        console.log(user);
        return res.status(200).json({
            message: "User signed up successfully"
        });
    }
    catch (error) {
        console.error('Error while signing up!', error);
        return res.status(500).json({
            message: 'Internal Server Error, Please try again later..!'
        });
    }
}));
// @ts-ignore
app.post('/api/v1/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(411).json({
                message: 'Please fill up the username and password correctly- Error in inputs'
            });
        }
        const user = yield db_1.User.findOne({
            username
        });
        if (!user) {
            return res.status(411).json({
                message: 'Wrong Credentials, Please give the correct credentials - Error in inputs'
            });
        }
        if (user.password !== password) {
            return res.status(411).json({
                message: 'Wrong Password, Please give the correct password- Error in Inputs'
            });
        }
        // JWT Token:
        const token = jsonwebtoken_1.default.sign({ username, password }, config_1.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({
            message: 'User Signed-in successfully',
            token,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
}));
// @ts-ignore
app.post('/api/v1/content', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // {
    //     "type": "document" | "tweet" | "youtube" | "link",
    //     "link": "url",
    //     "title": "Title of doc/video",
    //     "tags": ["productivity", "politics", ...]
    // }
    try {
        const { type, link, title, tags } = req.body;
        if (!type || !title) {
            return res.status(411).json({
                message: 'Error in inputs: Please give the title and type',
            });
        }
        ;
        const content = { type, link, title, tags };
        yield db_1.Content.create(content);
        console.log("Content Created", content);
        return res.status(200).json({
            message: 'Content created successfully'
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error, Please retry',
        });
    }
}));
app.get('/api/v1/content', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.delete('/api/v1/content', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.post('/api/v1/brain/share', middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.get('/api/v1/brain/:shareLink', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
