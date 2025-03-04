'use client';
import axios from "axios";
import { useEffect, useState } from "react";

export default function UserPage() {

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<{ id: number; title: string } | null>(null);

    useEffect( () => {
        setLoading(true);
         axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
    }, []);

    if(loading) {
        return <h1>Loading...</h1>
    }


  return (
    <div>
      <h1>User Page</h1>

    <h2>{data?.id}</h2>
    <h2>{data?.title}</h2>

    </div>
  );
}


// this is a  bad way to fetch data in next.js,
// because we should be taken care of the server side rendering and SEO optimization. which is not possible with this approach.

// Atleast for the landing page we should be taken care of the SEO optimization and server side rendering.
// go through the home page for this approach.