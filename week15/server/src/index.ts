import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

// Endpoints:: 



// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});