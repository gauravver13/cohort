import { useState } from 'react';
import './App.css';
import { useEffect, memo} from 'react';

function App() {
  return <>
    <Counter />
  </>
}

function Counter() {
  
  const [count, setCount] = useState(0);

  useEffect( () => {
    setInterval(() => {
      setCount(count => count+1)
    }, 3000);
  }, [])

  return <div>
    <MemoizedCurrentCount />
    <Increase />
    <Decrease />
  </div>
}

const MemoizedCurrentCount = memo(CurrentCount)

function CurrentCount(){
  return <div>
    1
  </div>
}

const Increase = memo(function () {
  return <button onClick={()=>{}}>Increase</button>
})

const Decrease = memo(function () {
  return <button onClick={()=>{}}>Decrease</button>
})



export default App