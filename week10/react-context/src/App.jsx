import { createContext, useContext, useState } from "react"

const BulbContext = createContext();

// TODO::
// const ThemeContext = createContext();

// function ThemeProvider({children}) {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     document.querySelector('html').classList.remove("light", "dark")
//     document.querySelector('html').classList.add(theme)
//   }, [theme]);

//   return <ThemeContext.Provider value={{
//           dark: setTheme("dark"),
//           light: setTheme("light")
//         }}>
//             {children}
//         </ThemeContext.Provider>
// }



// context are in seperate files
function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true)  
  return <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
          { children }    
      </BulbContext.Provider>
}

function App() {    
  return <>
    <h1>Hi There</h1>
      <BulbProvider>
        <Light />
      </BulbProvider>
  </>
}

function Light() {
  return <div>
    <LightBulb />
    <LigthSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>
  {bulbOn? "Bulb On": "Bulb Off"}
  </div>
}

function LigthSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle</button>
  </div>

}


export default App; 

