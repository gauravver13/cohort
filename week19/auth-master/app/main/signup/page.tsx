'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useState } from "react"

export default function Signin() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async () => {
        try {
            const response = await axios.post("/api/auth/sign-in", { username, password });
            console.log('Response from server: ', response.data);   
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
    return (
        <> 
            <h1 className="justify-center text-3xl font-bold">Sign-up</h1>
            <Input placeholder="username" onChange={e => setUsername(e.target.value)}></Input>
            <Input placeholder="email" onChange={e => setEmail(e.target.value)}></Input>
            <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></Input>

            <Button onClick={onSubmit}>Submit</Button>
        </>
    )
}