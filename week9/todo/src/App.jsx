import { useEffect, useState } from "react"

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  // useEffect(function(){
  //   setInterval(function(){
  //     setCounterVisible(c => !c);
  //   }, 5000)
  // },[])

  return <div>

    Hi there
    <br />
    {counterVisible?<Counter></Counter>: null}
    {counterVisible && <Counter></Counter>}
    
  </div>
}

function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  console.log('counted');


  

  // useEffect(function(){
  //   let clock = setInterval(function increaseCount() {
  //     setCount(c => c+1);
  //     console.log('inside interval!');
      
  //     // setCount(function(count) {
  //     //   return count+1;
  //     // });
  //   }, 1000)
  //   console.log('Mounted');

  //   return function(){
  //     clearInterval(clock)
  //     console.log('Unmounted');
  //   }
  // }, [])

  // setInterval(  function increaseCount() {
  //   setCount(count+1);
  // }, 1000)

  // useEffect(function(props){
  //     setInterval(function(){
  //       setCount(c => c+1)
  //     })
  //     return 
  // }, [])

  function increaseCount() {
    setCount(count+1);
  }
  function decreaseCount() {
    setCount1(count1-1);
  }
  function resetCount() {
    setCount(0);
  }

  return <div>
    <h1>{count}</h1>
    <h1>{count1}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Descrease Count</button>
    <button onClick={resetCount}>Reset Count</button>
  </div>
}

export default App


// Raw manupulation can be done, But react takes all the hard part and makes our life simpler.

// conditional rendering, Mounted, UnMounted, CleanUp, dependency array!
// Hooks(useState, useEffect)