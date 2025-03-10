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
exports.userMiddleware = void 0;
const config_1 = require("./config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// @ts-ignore
const userMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        // console.log("headers", req.headers);
        // console.log('token', req.headers.authorization)
        // console.log('token sent', req.headers.authorization?.split(' ')[1]);
        if (!token) {
            return res.status(411).json({
                message: 'User not authenticated, Please verify token'
            });
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, config_1.JWT_SECRET);
        req.user = decodedToken;
        next();
    }
    catch (error) {
        return res.status(500).json({
            message: 'Invalid or expired token'
        });
    }
});
exports.userMiddleware = userMiddleware;
