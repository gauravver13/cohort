"use client"
import { useState } from "react"

export default function Bad(){
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="text-center font-bold m-12">
            <h1 className="text-red-600">This is a Bad page</h1>
            <h2>Why? Because this page components can change according to the user</h2>
            <h3>It depends on users action</h3>
            <button
            className="bg-red-300 p-2 border-2 rounded-2xl cursor-pointer"
            onClick={() => {
                setCount(c => c+1);
            }}>Click me! ({count})</button>
        </div>
        </>
    )
}