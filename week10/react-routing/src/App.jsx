
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";    //Hash-Router(Chrome extension)


function App() {



// JUST ANOTHER WAY TO REACT:: 
  // const router = [
  //   {
  //     path: "/fgh/cvbn.fghjk",
  //     element: <Landing />
  //   },
  //   {
  //     path: "/fgh/cvbn.fghjk",
  //     element: <fghj />
  //   },
  //   {
  //     path: "/fgh/cvbn.fghjk",
  //     element: <dfghj />
  //   },
  // ]

  return <>

  {/* Naive approach */}
  {/* <h2>
    <a href="/">ALLEN </a> |
    <a href="/neet/online-coaching-class-11">CLASS-11 </a> |
    <a href="/neet/online-coaching-class-12">CLASS-12 </a> |
  </h2> */}

      <BrowserRouter>
        {/* <h3>Single Page Applications: SPA's</h3> */}
        {/* <h2>
        HEADER
          <Link to="/">ALLEN </Link> 
          |
          <Link to="/neet/online-coaching-class-11">CLASS-11 </Link>
          |
          <Link to="/neet/online-coaching-class-12">CLASS-12 </Link> 
          |
        </h2> */}
        <Routes>
          <Route path="/neet" element={<Layout />} >
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />}/>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />}/>
          </Route>
            <Route path="/" element={<Landing />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
      {/* <div>FOOTER | Contact Us</div> */}
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
    <h1>Hello </h1>
  </div>
}

function Layout() {
  return <div>
    <Header />
    <div style={{height:"70vh", backgroundColor: "green"}}>
      <Outlet />
    </div>
    <Footer />
  </div>
}

function Header() {
  return <div style={{height: "10vh", backgroundColor: "red"}}>
          <h2 style={{borderRadius: '100px'}}>Header</h2>
            <div>
              <Link to="/">ALLEN </Link> 
              |
              <Link to="/neet/online-coaching-class-11">CLASS-11 </Link>
              |
              <Link to="/neet/online-coaching-class-12">CLASS-12 </Link> 
            </div>
      </div>
}

function Footer() {
  return <div style={{backgroundColor: 'pink', height: "40vh"}}>
        Footer...
        <div>FOOTER | Contact Us</div>
  </div>
}

function ErrorPage() {
  return <div>
    <h3>404! Sorry, Page not found!!</h3>
  </div>
}

export default App;

// ASSIGNMENT: DO ROUTING FOR Home, About, Blogs, Contact, Layout, NoPage404!