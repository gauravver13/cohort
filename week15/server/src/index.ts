import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { userMiddleware } from './middleware';

const app = express();
app.use(express.json());
app.use(cors());

//EndPoints:

app.post('/api/v1/signup', async (req, res) => {
    
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