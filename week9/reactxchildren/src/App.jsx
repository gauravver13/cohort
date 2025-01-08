
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>

      {/* METHOD 1: */}
      <Card>
          <h2>Card Title</h2>
          <p>This is some content inside the card.</p>
      </Card>
      <Card>
          <h2>Another Card</h2>
          <p>This card has different content!</p>
      </Card>

      {/* METHOD 2:  */}
      <Card children={ <div style={{color:'green'}}>Hi there
        <br />
        <h2>What elese do you want!?</h2>
      </div>} />

    </div>
  )
}



// Generic Card Component representing children as prop!
function Card({ children }) {
  return (
      <div style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '20px',
          margin: '10px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
      }}>
        Upper topbar
          {children}
        
      </div>
  );
};

export default App
