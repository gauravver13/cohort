'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'


export default function User() {
const [loading, setLoading] = useState(true)
const [data, setData] = useState<{id: number; name: string; email: boolean; } | null>(null)

  useEffect(() => {
    // axios.get('http://localhost:3000/api/v1/user/details')
    // axios.get('/api/v1/user/details')
    axios.get('api/v1/user/details')
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
          <h2>{data?.name}</h2>
          <h2>{data?.email}</h2>
        </>
      )}
    </div>
  )
}


// this is a  bad way to fetch data in next.js,
// because we should be taken care of the server side rendering and SEO optimization. which is not possible with this approach.

// Atleast for the landing page we should be taken care of the SEO optimization and server side rendering.
// go through the home page for this approach.
