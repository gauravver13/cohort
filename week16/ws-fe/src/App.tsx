"use client";
import { useEffect, useState } from "react"

// More elegant useSocket hook!!
export default function App() {
  const [socket, setSocket] = useState();

  function sendMessage(){
    if(!socket) {
      return;
    }

    // @ts-ignore
    socket.send("ping");
  }

  // This will render only when the components mount or dependencies changes-means once()! otherwise bad approach- fo=figure out more about this. 
  useEffect(() => {
    // fetch("ws://localhost:8080/users")
    const ws = new WebSocket("ws://localhost:8080");
    // @ts-ignore
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data);
    }

    // ws.onerror = () => {

    // }

    // ws.close = () => {
      
    // }

    // ws.onopen = () => {

    // }



  }, [])
  return (
    <>
      <h1 className="text-center mb-2">CHAT APPLICATION</h1>
      <div className="bg-red-300 rounded-md">
        <label htmlFor="" className="text-black font-bold">Message: </label>
      <input type="text" name="" placeholder="message" className="bg-white text-black rounded-lg"></input>
      <button className="font-semibold m-2 p-auto rounded-md bg-red-600"
      onClick={sendMessage}>Send</button>
      </div>

    </>
  )
}