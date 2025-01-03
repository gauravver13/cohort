const express = require('express')
const { UserModel, TodoModel } = require('./db')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gauravver13:O4LetzvALvx0fTRB@cluster0.h790h.mongodb.net/todo-gaurav22')

// mongoose.connect(process.env.MONGODB_URI)

const JWT_SECRET = "asdfghjklzxcvbnmqwertyuiop"

const app = express()
const port = 3000
app.use(express.json());


function auth(req, res, next) {
    const token = req.headers.token;

    const decodedToken = jwt.verify(token, JWT_SECRET);

    if(decodedToken) {
        req.userId = decodedToken.id;
        next()
    } else {
        res.status(403).json({
            "message": "Wrong credentials, Unauthorized User!"
        })
    }
}

app.post('/signup', async function(req, res) {

    const { email, password, name } = req.body;

    const user = await UserModel.findOne({
        email: email
    })

    if(user) {
        res.status(401).json({
            message: "User already exists"
        })
        return
    }

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })


    res.json({
        message: "you are signed up"
    })
    
})

app.post('/signin', async function(req, res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user) {
        const token = jwt.sign({
            id: user._id.toString(),
            email: user.email
        }, JWT_SECRET)

        console.log(user);
        
        res.json({
            message: "You are logged in",
            token: token
        })
    } else {
        res.status(401).json({
            messgae: "Incorrect Credentials"
        })
    }
})


app.post('/todo', auth, async function(req, res) {
    const userId = req.userId;

    const { title } = req.body;

    await TodoModel.create({
        title,
        userId
    })
    res.json({
        "message": "Todo sets to the db successfully"
    })
})

app.get('/todos',  auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        "todo": todos
    })

})

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))