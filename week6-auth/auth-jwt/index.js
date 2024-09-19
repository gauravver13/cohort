import express, { json } from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors'
const app = express()

app.use(json());
app.use(express.static("./public"))
app.use(cors())

let users = []
const JWT_SECRET = "ABC!@#xyz123"


// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";

//     for(let i=0; i<32; i++) {
//         token += options[Math.floor(Math.random() * options.length)]
//     }
//     return token;
// }

function auth(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if(err) {
                res.status(401).send({
                    message: "Error in verifying token"
                })
            } else {
                req.user = decoded 
                next()
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

app.post('/signup', (req, res)=>{
    const { username, password} = req.body;

    if(users.find((u) => u.username == username)) {
        res.send({
            message: "Username already taken"
        })
        return;
    }

    if(!username && !password) {
        res.send('Please enter username and password')
        return;
    }

    users.push({
        username: username,
        password: password
    })

    res.send({
        message: "user is signed up!"
    })

    console.log(users);
    
})

app.post('/signin', (req, res)=> {
    const {username, password} = req.body;

    const user = users.find((u) => u.username==username && u.password == password)

    if(!user) {
        res.status(400).send({
            message: "User not signed In.."
        })
    } else {
        const token = jwt.sign({        // Stateless token
            username: username
        }, JWT_SECRET)

        res.send({
            token: token
        })
    }
    console.log(users);    
})

// app.get('/me', (req, res) => {
//     const token = req.headers.token
//     const decodedInfo = jwt.verify(token, JWT_SECRET);
//     const username = decodedInfo.username
    
//     const user = users.find(u => u.username == username)

//     if(user) {
//         res.send({
//             message: `Hi the username is: ${user.username}`,
//             password: user.password
//         })
//     } else {
//         res.status(400).send({
//             message: "Sorry, Token inValid!"
//         })
//     }
    
// })


app.get('/me', auth, (req, res) => {
    const user = req.user;

    console.log(req.user);
    res.send({
        username: user.username
    })
    
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
    
})