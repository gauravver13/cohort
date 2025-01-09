
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";    //Hash-Router(Chrome extension)


function App() {

  return <>

  {/* Naive approach */}
  {/* <h2>
    <a href="/">ALLEN </a> |
    <a href="/neet/online-coaching-class-11">CLASS-11 </a> |
    <a href="/neet/online-coaching-class-12">CLASS-12 </a> |
  </h2> */}

      <BrowserRouter>
        <h3>Single Page Applications: SPA's</h3>
        <h2>
          <Link to="/">ALLEN </Link> 
          |
          <Link to="/neet/online-coaching-class-11">CLASS-11 </Link>
          |
          <Link to="/neet/online-coaching-class-12">CLASS-12 </Link> 
          |
        </h2>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />}/>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />}/>
          <Route path="/" element={<Landing />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
      <div>Hi there</div>
  </>
}

function Class11Program() {
  return <div>
    <h1>NEET program for class 11th.</h1>
  </div>
}
function Class12Program() {
  const navigate = useNavigate()

  function redirectUser() {
    navigate("/")
  }

  return <div>
    <h1>NEET program for class 12th.</h1>
    <button onClick={redirectUser}>Go back to the landing Page</button>
  </div>
}

function Landing(){
  return <div>
    Welcome to allen!
  </div>
}

function ErrorPage() {
  return <div>
    <h3>404! Sorry, Page not found!!</h3>
  </div>
}

export default App;

// ASSIGNMENT: DO ROUTING FOR Home, About, Blogs, Contact, Layout, NoPage404!