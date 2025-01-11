import { useState } from "react"


function App() {
  return <>
    <h1>Hi There</h1>
    <LightBulb  />
  </>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)      // [state variable, a function]
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

function ToggleBulbState({bulbOn, setBulbOn}) {

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