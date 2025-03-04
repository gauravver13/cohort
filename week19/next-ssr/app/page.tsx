'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'


export default function User() {
const [loading, setLoading] = useState(true)
const [data, setData] = useState<{id: number; title: string; completed: boolean; } | null>(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
    .then((response) => {
      console.log(`Request went out!!`)
      setData(response.data)
      setLoading(false);
    })
  }, [])

  return (
    <div>
      <h1>User</h1>
      {loading ? <h2>Loading...</h2> : (
        <>
          <h2>{data?.id}</h2>
          <h2>{data?.title}</h2>
          <h2>{data?.completed}</h2>
        </>
      )}
    </div>
  )
}


// this is a  bad way to fetch data in next.js,
// because we should be taken care of the server side rendering and SEO optimization. which is not possible with this approach.

// Atleast for the landing page we should be taken care of the SEO optimization and server side rendering.
// go through the home page for this approach.
