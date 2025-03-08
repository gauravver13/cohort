import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { userMiddleware } from './middleware';

const app = express();
app.use(express.json());
app.use(cors());

//EndPoints:
const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;


// @ts-ignore
app.post('/api/v1/signup', async (req , res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(411).json({
            message: "Error in inputs"
        })
    }

    if(username.length<3 && username.length>10) {
        return res.status(411).json({
            message: "Error in inputs"
        })
    }

    if( !(validPassword.test(password)) ) {
        return res.status(411).json({
            message: "Error in inputs"
        })       
    }

    // db check 
    //db-call and save

    return res.status(200).json({
        message: ""
    })


    
})

app.post('/api/v1/signin', async (req, res) => {

})

app.post('/api/v1/content', userMiddleware, async (req, res) => {

})

app.get('/api/v1/content', userMiddleware, async (req, res) => {

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