import React from "react";

function App() {

  return (
    <>
      <ErrorBoundary> 
        <Card1 />
      </ErrorBoundary>

      <ErrorBoundary> 
        <Card2 />
      </ErrorBoundary>

    </>
  )
}


function Card1() {
  
  // throw new Error("Something Went wrong");
  
  return (
    <div style={{backgroundColor: 'red', color: 'black', padding: 20, margin: 20, borderRadius: 20 }}>Hi There</div>
  )
}

function Card2() {

  throw new Error("Error while rendering..");
  return (
    <div style={{backgroundColor: 'red', color: 'black', padding: 10, margin: 10, borderRadius: 20 }}>Hello</div>
  )
}


class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }

  render() {
      if (this.state.hasError) {
          return <h1 style={{backgroundColor: 'red', color: 'black', padding: 10, margin: 10, borderRadius: 20 }}>Something went wrong</h1>;
      }

      return this.props.children; 
  }
}


export default App
