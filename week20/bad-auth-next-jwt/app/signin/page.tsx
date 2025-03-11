"use client"
import axios from "axios"

export default  function Signin() {
    return <div className="justify center text-2xl font-bold align-middle m-auto">
        <h2>SIGN IN PAGE</h2>
        username<input className="bg-white text-black m-1 rounded-xl"></input>
        <br />
        password<input className="bg-white text-black m-1 rounded-xl"></input>
        <br />
        <button
        className="bg-amber-200 text-orange-500 rounded-xl"
        onClick={async () => {
            const res = await axios.post('http://localhost:3000/api/signin', {
                username: "asd",
                password: "assdada"
            })

            localStorage.setItem("token", res.data.token);
        }}>Sign in</button>
    </div>
}