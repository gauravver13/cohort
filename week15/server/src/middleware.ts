import { JWT_SECRET } from "./config";
import  jwt  from "jsonwebtoken";



// @ts-ignore
export const userMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.token?.split(' ')[1];

        if(!token) {
            return res.status(411).json({
                message: 'User not authenticated, Please verify token'
            })
        }

        const decodedToken = jwt.verify(token, JWT_SECRET);

        req.user = decodedToken;

        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid or expired token'
        })
    }
}