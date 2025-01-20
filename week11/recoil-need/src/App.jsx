import { useState } from 'react'

import './App.css'


// TODO: try doing it by own!,
// TODO: try doing it by own with contextAPI!,
// TODO: recoil!,
function App() {
  return (
    <>
        <Counter />
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  return <div>
       <CurrentCount count={count} />
       <Increase setCount={setCount} />
       <Decrease setCount={setCount} />
  </div>
}

function CurrentCount({count}) {
  return <div>
    {count}
  </div>
}

function Increase({setCount}){
  return <button onClick={()=>setCount((c)=>c+1)}>Increase</button>
}
function Decrease({setCount}){
  return <button onClick={function() {
    setCount((c)=>c-1)
  }}>Decrease</button>
}

export default App
