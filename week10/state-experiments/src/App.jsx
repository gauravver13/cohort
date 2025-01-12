import { useState } from "react"


function App() {
    const [bulbOn, setBulbOn] = useState(true)      // [state variable, a function]
  return <>
    <h1>Hi There</h1>
    <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </>
}

function LightBulb({bulbOn, setBulbOn}) {
  return <div>
    <BulbState bulbOn={bulbOn} />             
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />       
  </div>
}

function BulbState({bulbOn}) {
  // const [bulbOn, setBulbOn] = useState(true)
  return <div>
    {bulbOn? "Bulb On": "Bulb Off"}
  </div>
}

function ToggleBulbState({ setBulbOn}) {

  function toggle() {
    setBulbOn(currentState => !currentState)
    // setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App; 

// ROLLING UP<-
// Prop Drilling by the ugly way! managing state becomes very difficult as the application scales big up with lots of components. Anti-Pattern, code unusuable, unmaintainable and hindered readability, Complexity!
// 