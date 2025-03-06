import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();


// end points:




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});