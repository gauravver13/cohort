
function App() {

  return (
    <>
      <div className="h-screen bg-blue-950 text-center">
        <div className="text-xl text-white"><span className="text-teal-300">Webinar</span>.gg</div>
        <h2 className="font-medium text-2xl text-white">Verify Your Age</h2>
        <p className="text-white">please confirm your birth year. This data will not be stored.</p>
        <input type="text" name="Your Birth Year" placeholder="Your Birth Year" id="" className="bg-blue-900 p-1 rounded-md"  />
        <button className="bg-teal-400 px-16 font-semibold rounded-lg py-2 text-black">Continue</button>
      </div>
    </>
  )
}

export default App