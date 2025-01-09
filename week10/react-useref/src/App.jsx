import { useRef } from "react"

function App() {

  // // RAW METHOD: Ugly way
  // function focusOnInput() {
  //   document.getElementById("name").focus()
  // }


  // useRef
  // reference to a value, such that when u change the value, the component DOES NOT RE-RENDER
  const inputRef = useRef();

  function focusOnInput() {
    inputRef.current.focus()
  }



  return (
    <>
      Hi there
      <h3>Sign Up</h3>
      {/* <input ref={inputRef} id="name" type="text" />  // We don't need id while using ref, that makes the effort!*/} 
      <input ref={inputRef} type="text" />
      <input type="text" />
      <button onClick={focusOnInput}>Submit</button>
    </>
  )
}

export default App
