import { useState } from "react";

import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

import './App.css'
import { counterAtom } from "./store/atoms/counter";


function App() {
  return (
    <>
        <RecoilRoot>
          <Counter />
        </RecoilRoot>
    </>
  )
}

function Counter() {

  return <div>
       <CurrentCount />
       <Increase />
       <Decrease />
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);

  return <button onClick={()=>setCount((c)=>c+1)}>Increase</button>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);

  return <button onClick={()=>{setCount(c=>c-1)}}>Decrease</button>
}

export default App
