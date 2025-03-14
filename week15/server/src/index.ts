import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { userMiddleware } from './middleware';

import { Content, User } from './db';
import { JWT_SECRET } from './config';

const app = express();
app.use(express.json());
app.use(cors());

//EndPoints:
const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
// TODO: Zod Validation and hash the password;

// @ts-ignore
app.post('/api/v1/signup', async (req , res) => {
    try {
            const {username, password} = req.body;
        
            if(!username || !password) {
                return res.status(411).json({
                    message: "Error in inputs-please fill up the required details"
                })
            }
        
            if(username.length<3 && username.length>10) {
                return res.status(411).json({
                    message: "Error in inputs-username"
                })
            }
        
            if( !(validPassword.test(password)) ) {
                return res.status(411).json({
                    message: "Error in inputs-password"
                })       
            }
        
            // db check 
            //db-call and save
            let user = await User.findOne({ username });
        
            if(user) {
                return res.status(403).json({
                    message: "User already exist, retry with differnet username!"
                })
            }
        
            user = await User.create({ username, password });
        
            console.log(user);
            return res.status(200).json({
                message: "User signed up successfully"
            })
    } catch (error) {
        console.error('Error while signing up!', error);
        return res.status(500).json({
            message: 'Internal Server Error, Please try again later..!'
        })
    }
    
})

// @ts-ignore
app.post('/api/v1/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(411).json({
                message: 'Please fill up the username and password correctly- Error in inputs'
            })
        }

        const user = await User.findOne({
            username
        });

        if(!user) {
            return res.status(411).json({
                message: 'Wrong Credentials, Please give the correct credentials - Error in inputs'
            })
        }

        if(user.password !== password) {
            return res.status(411).json({
                message: 'Wrong Password, Please give the correct password- Error in Inputs'
            })
        }
        
        // JWT Token:
        const token = jwt.sign({ username, password }, JWT_SECRET, { expiresIn: '1h'});

        return res.status(200).json({
            message: 'User Signed-in successfully',
            token,
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        })
    }

})

// @ts-ignore
app.post('/api/v1/content', userMiddleware, async (req, res) => {

    // {
    //     "type": "document" | "tweet" | "youtube" | "link",
    //     "link": "url",
    //     "title": "Title of doc/video",
    //     "tags": ["productivity", "politics", ...]
    // }

    try {
            const { type, link, title, tags } = req.body;
        
            if(!type || !title) {
                return res.status(411).json({
                    message: 'Error in inputs: Please give the title and type',
                })
            };

            const content = { type, link, title, tags};
            
            await Content.create(content);

            console.log("Content Created", content);
            
            return res.status(200).json({
                message: 'Content created successfully'
            })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error, Please retry',
        })
    }

})

app.get('/api/v1/content', userMiddleware, async (req, res) => {
    try {
        const content = await User.find({
            contents: Content.find([])
        })



    } catch {
        res.status(500).json({
            message: "Internal Server error, Please try again later!"
        })
    }
})

app.delete('/api/v1/content', userMiddleware, async (req, res) => {

})

app.post('/api/v1/brain/share', userMiddleware, async (req, res) => {

})


app.get('/api/v1/brain/:shareLink', async (req, res) => {

})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})