const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())
const port = 3000
const JWT_SECRET = 'zxcvbnmqwertyuiopasdfghjkl'

let users = [];


function auth(req, res, next) {
    const token = req.headers.token;

    if(token) {
        const decodedToken = jwt.verify(token, JWT_SECRET)

        if(decodedToken) {
            req.username = decodedToken.username;
            next()
        } else {
            res.send({
                message: "Token not authenticated"
            })
        }
    } else {
        res.send({
            message: "User not authenticated"
        })
    }
}

app.post('/signup', function(req, res) {
    const { username, email, password } = req.body;


    if(!email && !username && !password) {
        res.status(401).send({
            message: "Please fill up the required details"
        })
        return;
    }

    const foundUser = users.find(u => u.username === username || u.email===email)

    if(foundUser) {
        res.send({
            message: "User already exists"
        })
        return;
    }

    const user = {
        username: username,
        email: email,
        password
    }

    users.push(user)
    console.log(user);
    res.send({
        message: 'User registered successfully'
    })

})

app.post('/signin', function(req, res) {
    const { username, email, password } = req.body;


    if(username || email) {
        const user = users.find(u => u.email === email || u.username === username)

        if(!user) {
            res.status(403).send({
                message: "User not exist"
            })
            return;
        }

        const isPasswordCorrect = (user.password === password)

        if(!isPasswordCorrect) {
            res.send({
                message: "Please send the correct password"
            })
        }

        if(user.token) {
            res.send({
                token: user.token
            })
            return;
        }

        const token = jwt.sign({
            username: username,
        }, JWT_SECRET)

        user.token = token

        console.log(users);
        
        res.send({
            token: token
        })

    }
})

let id = 1;

app.post('/todo', auth, function(req, res) {

    const user = req.username;
    const todo = req.body.todo;

    if(!user) {
        res.status(403).send({
            message: "Please login before setting todo"
        })
        return
    }

    const foundUser = users.find(u => u.username === user)

    if(!foundUser.todo) {
        foundUser.todo = [ {id, todo} ];
        res.send({
            message: "sets the todo"
        })
        return
    }
    id++;

    foundUser.todo.push({id, todo})

    console.log(foundUser);
    
    res.send({
        message: 'Sets todo successfully',
        todo: todo
    })

})

app.get('/todo', auth, function(req, res) {

    const user = req.username;

    const foundUser = users.find(u => u.username === user)



    const todos = [];

    if(foundUser.todo) {
        todos.push(foundUser.todo)
        res.status(201).send({
            message: "Got the real todo",
            todos: todos
        })
    } else {
        res.status(401).send({
            message: "No todos, Go get some of them for yourself!"
        })
    }
    console.log(todos);

})

app.put('/todo', auth, function(req, res) {
    const user = req.username
    const { id, todo } = req.body

    const foundUser = users.find(u => u.username === user)

    if(foundUser) {
        const oldTodo = foundUser.todo.find(t => t.id === id);
        
        if(oldTodo) {
            oldTodo.todo = todo
            res.send({
                message: 'Todo updated',
                todo: todo
            })
        } else {
            res.status(403).send({
                message: 'Todo not exists to update'
            })
        }
    } else {
        res.status(403).send({
            message: "User not found"
        })
    }

    console.log(foundUser);

})

app.delete('/todo', auth, function(req, res) {
    const user = req.username;
    const {id, todo} = req.body

    const foundUser = users.find(u => u.username === user)

    if(foundUser) {
        const foundUserTodo = foundUser.todo.findIndex(t => t.id === id || t.todo === todo);
        // console.log('FoundUserTodo:',foundUserTodo);
        console.log("FoundUser", foundUser.todo);
        const deleteTodo = foundUser.todo.splice(foundUserTodo, 1);

        console.log("After deletion: ",foundUser.todo);
        
        res.send({
            message: "Todo Deleted"
        })
    } else {
        res.status(403).send({
            message: "User not found How you even think to delete other user todo"
        })
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))