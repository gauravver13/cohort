import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const JWT_SECRET = 'XYZ!@#123aA';

const app = express();

app.use(express.json())
app.use(express.static("./public"))
app.use(cors())

let users = []

function auth(req, res, next) {
    const token = req.headers.token
    const decodedToken = jwt.verify(token, JWT_SECRET)

    try {
        if(decodedToken.username) {
            req.username = decodedToken.username
            next()
        }
    } catch (error) {
        res.json({
            messgae: "You are not logged in"
        })
    }
}

app.post('/signup', (req, res)=> {
    const { username, password }= req.body

    // console.log('REQ BODY::',req.body);
    // console.log('REQ::',req);
    

    if(!username && !password) {
        res.status(501).send({
            message: "Please provide username and password"
        })
    }

    const user = users.find(u => u.username === username)

    if(user) {
        res.send({
            message: "username already exists"
        })
        return;
    }
    users.push({
        username: username,
        password: password
    })

    console.log(users);
    res.send({
        message: "User registered successfully"
    })
})

app.post('/signin', auth, (req, res) => {
    const { username, password } = req.body

    const user = users.find((u) => u.username === username && u.password === password)

    if(!username && !password) {
        res.send({
            message: "Please fill up the username and password field corectly"
        })
    }

    if(!user) {
        res.status(401).send({
            message: "User not exist"
        })
        return
    }

    if(user.token) {
        res.send({
            token: user.token
        })
        return
    }

    const token = jwt.sign({
        username: username
    }, JWT_SECRET)

    user.token = token

    res.header("token", token)
    res.send({
        token: token
    })
    console.log(users);
    
})

app.get('/me', auth, (req, res) => {
    const user = req.username
    
    // console.log('req.body: ', user);

    // const foundUser = users.find(u => u.username === user)
    
        res.status(201).send({
            username: user
        })
})

app.listen(3000, () => {
    console.log('App is listening on port: 3000');
})