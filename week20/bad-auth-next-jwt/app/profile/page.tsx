"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {

    const [profilePicture, setProfilePicture] = useState('');
    useEffect( () => {
        axios.get("http://localhost:3000/api/profile", {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }).then( res => {
            setProfilePicture(res.data.avatarurl)
        }).catch(
            res => {
                setProfilePicture("Request not fulled filled on shi way")
            }
        )

    }, [])

    return <div>
        kya bakchodi h:: 
        {profilePicture}
        </div>

}