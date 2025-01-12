import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";



const CountContext = createContext();

function CountProvider({children}) {
  const [count, setCount] = useState(0)

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}


function Increase() {
  const {setCount} = useContext(CountContext)
  return <button onClick={() => setCount(count => count+1)}>Increase</button>
}

function Decrease() {
  const {setCount} = useContext(CountContext)

  function decrease(){
      setCount(d => d-1)
  }
  return <button onClick={decrease}>Decrease</button>
}

function Value() {
  const {count} = useContext(CountContext);

  return <>
    <h2>Value:</h2> {count}
  </>
}


function Parent() {
  return <>
    <CountProvider>
      <Increase />
      <Decrease />
      <Value />
  </CountProvider>
  </>

}

function App(){
  return <>
    <Parent />
  </>
}

export default App;