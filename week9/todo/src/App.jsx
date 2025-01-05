import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState({
    title: "",
    description: "",
    done: fasle
  })

  function addTodo() {
    let newArray = []
    for (let i=0; i<todos.length; i++) {
      newArray.push(todos[i])
    }

    newArray.push({
      title: "Hey",
      description: "",
      done: true
    });
    setTodos(newArray);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default App
