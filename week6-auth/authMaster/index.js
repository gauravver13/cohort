const express = require('express')
const app = express()

app.use(express.json());
let users = []

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";

    for(let i=0; i<32; i++) {
        token += options[Math.floor(Math.random() * options.length)]
    }
    return token;
}

app.post('/signup', (req, res)=>{
    const { username, password} = req.body;

    if(users.find((u) => u.username == username)) {
        res.send({
            message: "Username already taken"
        })
        return
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
        const token = generateToken();

        user.token = token;

        res.send({
            token: token
        })
    }
    console.log(users);    
})

app.get('/me', (req, res) => {
    const token = req.headers.token

    let user = users.find(u => u.token == token)

    if(user) {
        res.send({
            message: `Hi the user${user.username}`
        })
    } else {
        res.status(400).send({
            message: "Sorry, Token inValid!"
        })
    }
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
    
})