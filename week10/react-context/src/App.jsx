import { createContext, useContext, useState } from "react"

const BulbContext = createContext();



function App() {
    const [bulbOn, setBulbOn] = useState(true)      

  return <>
    <h1>Hi There</h1>
    <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
        <Light />
    </BulbContext.Provider>
  </>
}

function Light() {
  return <div>
    <LightBulb />
    <LigthSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>
  {bulbOn? "Bulb On": "Bulb Off"}
  </div>
}

function LigthSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle</button>
  </div>

}

// function ToggleBulbState({ setBulbOn}) {

//   return <div>
//     <button onClick={toggle}>Toggle the bulb</button>
//   </div>

// }

export default App; 

