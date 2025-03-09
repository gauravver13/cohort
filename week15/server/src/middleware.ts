import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import { JWT_SECRET } from "./config";


// @ts-ignore
export const userMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.token?.split(' ')[1];         // extract bearer token

        if(!token) {
            return res.status(401).json({
                message: 'Access denied, No token provided'
            })
        
        const decodedToken = jwt.verify(token, JWT_SECRET);

        req.user = decodedToken;

        next();

        }
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid or expired token'
        })
    }
}
 