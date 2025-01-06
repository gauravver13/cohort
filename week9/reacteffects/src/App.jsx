import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("feed")
  const [tabData, setTabData] = useState({})
  const [loading, setLoading] = useState(true)
  

  useEffect(function() {
    // send a backend request to get for this tab.
    console.log('Send request to backend to get data for tab '+ currentTab);
    // fetch('https://jsonplaceholder.typicode.com/todos/13' + currentTab)  //just for the sake and to get the idea of fetching via examples of 1, 2, 3... and so on
    fetch('https://jsonplaceholder.typicode.com/todos/13')
    .then(async res => {
      const json = await res.json();
      setTabData(json);
      setLoading(false);
    });
    
  },[currentTab])

  return <>
    <button onClick={function() {
      setCurrentTab("feed")
    }} style={{color: currentTab =="feed" ? "red" : "black"}}>feed</button>  
    <button onClick={() =>setCurrentTab("jobs")} 
    style={{color: currentTab =="jobs" ? "red" : "black"}}>jobs</button>  
    <button onClick={() => 
      setCurrentTab("notifications") }
      style={{color: currentTab =="notifications" ? "red" : "black"}}>notifications</button>  
    <button onClick={() => setCurrentTab("messages")}
    style={{color: currentTab =="messages" ? "red" : "black"}}>messages</button>  

      <br />
      {loading ? "loading..."  : <div>
        <h1>{tabData.userId}</h1>
           <h2>{tabData.id}</h2>
           <p>{tabData.title}</p>
           <p>{tabData.completed}</p>
      </div>
      }
  </>
}

export default App;