import { useEffect, useState } from "react";

export function usePostTitle(){
    const [post, setPost] = useState({})

    async function getPost() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setPost(json);
    }
    useEffect(function() {
        getPost();
    }, [])

    return post.title;
}


export function useFetch(url) {     // url/domain/sdfghjk - users fault, users should give the correct url 
    const [finalData, setFinalData] = useState({});

    async function getDetails() {
        const response = await fetch(url);
        const json = await response.json();

        setFinalData(json);
    }

    useEffect(()=>{
        getDetails();
    }, []) 

    return {
        finalData
    }
}


