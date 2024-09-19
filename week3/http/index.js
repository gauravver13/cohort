const express = require('express')

const app = express()

let todos = [];
//store the data in a file, foundation of database! file based database
// add user logic 
let currentId = 0;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/add-todo', (req, res)=> {
    const data = req.body


    const newTodo = {
        id: currentId++,
        data,
        completed: false,
    }
    todos.push(newTodo)
    res.status(200).send(newTodo)
})


app.get('/get-todo', (req, res)=> {
    res.json(todos)
})

app.put('/add-todo/:id', (req, res)=>{
    const { id, data, completed } = req.body
    const todo = todos.push(t => t.id === parseInt(req.params.id))

    todo.data = data
    todo.id = id
    todo.completed = completed 


    res.json(todo).status(200).send(todo)
})

app.delete('/delete-todo:id', (req, res)=> {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id))

    todos.splice(todoIndex, 1)
    res.status(204).send().json(todos)
})

app.listen(3000)