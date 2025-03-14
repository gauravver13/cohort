import { useEffect, useRef, useState } from "react"

// More elegant useSocket hook!!
export default function App() {
  // const [socket, setSocket] = useState();
  // const inputRef = useRef("");

  // function sendMessage(){
  //   if(!socket) {
  //     return;
  //   }
    
  //   // @ts-ignore
  //   const message = inputRef.current.value;
  //   console.log('socket message sending')
  //   // @ts-ignore
  //   socket.send(message)
  //   console.log('socket sent')


  //   // hard-coded stuffs: 
  //   // // @ts-ignore
  //   // socket.send("ping");
  // }

  // // This will render only when the components mount or dependencies changes-means once()! otherwise bad approach- fo=figure out more about this. 
  // useEffect(() => {
  //   // fetch("ws://localhost:8080/users")
  //   const ws = new WebSocket("ws://localhost:8080");
    
  //   console.log('socket is going to hung in fe');
  //   // @ts-ignore
  //   setSocket(ws);

  //   console.log('Set-Socket is hungged in fe');

  //   ws.onmessage = (ev) => {
  //     alert(ev.data);
  //     console.log('IS this called')
  //   }

  //   console.log("ws boomed");

  //   // ws.onerror = () => {

  //   // }

  //   // ws.close = () => {
      
  //   // }

  //   // ws.onopen = () => {

  //   // }
  // }, [])


  // NEW SCENE BUT SAME:

  const [ws, setWs] = useState("");
  const inputRef = useRef(""); 

  function sendMessage() {
    if(!ws) {
      return;
    }

    // @ts-ignore
    const message = inputRef.current.value;

    // @ts-ignore
    ws.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    // @ts-ignore
    setWs(ws);

    ws.onmessage = (e) => {
      console.log(e.data)
      alert(e.data);
    }

  }, [])



  return (
    <>
      <h1 className="text-center mb-2">CHAT APPLICATION</h1>
      <div className="bg-red-300 rounded-md">
        <label htmlFor="" className="text-black font-bold">Message: </label>
      <input ref={inputRef} type="text" name="" placeholder="message" className="bg-white text-black rounded-lg"></input>
      <button className="font-semibold m-2 p-auto rounded-md bg-red-600"
      onClick={sendMessage}>Send</button>
      </div>

    </>
  )
}