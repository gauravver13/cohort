import { useState } from "react"


function App() {

  const todos = [{
    title: "Go to gym and gift yourself a healthy and active body!",
    done: false
  }, {
    title: "Complete cohort in jan only",
    done: false
  }, {
    title: "Research and get your hands dirty on the ongoing startup.",
    done: false
  }, {
    title: "You are good to go for your travel agency startup",
    done: false
  }, {
    title: "Make a platform like Bla-Bla",
    done: false
  }, {
    title: "Learn Web3 in 2025",
    done: false
  }, {
    title: "Finish all of the above in 2025 only",
    done: false
  },
]

let id = 1;
const todoComponents = todos.map( todo => <Todo key={id++}
  title={todo.title} done={todo.done} />)

  return (
    <>
        {todoComponents}
    </>
  )
}

function Todo( {title, done} ) {
  return <div style={{color: "black", backgroundColor: "red", padding: 10, borderRadius: 20, margin: 20 }}> 
    <h4>{title}</h4> - {done ? "Done!": "Not Done"} 
    
  </div>
}

export default App
