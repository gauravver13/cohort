import { useState } from 'react';
import './App.css';
import { useFetch, usePostTitle } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';


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

TODO: go through the usePrev blog listed in slides of week 11 - 
function App() {

  // const postTitle = usePostTitle();
  const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/45");
  // const { data } = {...finalData};
  // console.log(data);
  const postTitle = finalData.title;

  // usePrev():
  const [state, setState] = useState(0)
  const prev = usePrev(state);

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