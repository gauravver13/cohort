import { useState } from 'react';
import './App.css';
import { useFetch, usePostTitle } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/useDebouce';


// custom Hook
function useCounter(){
  const [count, setCount] = useState(0);
  
  function increaseCount() {
    setCount(count+1);
  }

  return {
    count: count,
    increaseCount: increaseCount
  }
}

// TODO: go through the usePrev blog listed in slides of week 11 react - customHooks=>usePrev;
function App() {

  // const postTitle = usePostTitle();
  // const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/45");
  // dynamic route 
  const [current, setCurrent] = useState(0)
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + current);
  // const { data } = {...finalData};
  // console.log(data);
  const postTitle = finalData.title;

  // usePrev():
  const [state, setState] = useState(0)
  const prev = usePrev(state);

  function sendDataToBackend(){
    fetch("api.amazon.com/search");
  }

  // useDebounced:
  const debouncedFn = useDebounce(sendDataToBackend)

  return ( 
  <div>
      <Counter />
      <br />
      <Counter />
      <PostTitle />
      {/* {postTitle} */}
      <br />
      <div>
        <h2>Here's the final data of useFetch:</h2>
        {postTitle}
        <button onClick={()=>setCurrent((curr)=>curr+1)}>postId increase</button>
        <p>Postid: {current}</p>
        
      </div>
      <div>
        <h4>Stringify version of fetch Data:</h4>
        <p>{JSON.stringify(finalData)}</p>
      </div>

      <br />
      <div>
          <p>{state}</p>
          <button onClick={() => {
            setState((curr) => curr+1);
          }}>Click Me</button>
          <p>The previous value was: {prev}</p>
      </div>

      <br />
      <div>
        <h3>Deboucing technique: </h3>
        <h4>Learn and Get your hands dirty here..</h4>
        <input type="text" onChange={debouncedFn}></input>
      </div>
  </div>
  )
}

function PostTitle() {
  const postTitle = usePostTitle();

  return <>
  <h4>Post Title: </h4>
  <p>{postTitle}</p> 
  
  </>
}


function Counter(){

  const {count, increaseCount} = useCounter()

  return <div>
    <button onClick={increaseCount}>Count: {count}</button>
  </div>
}

export default App;