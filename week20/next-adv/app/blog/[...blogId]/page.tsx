// /blog/1
// /blog/2
// /blog/

import axios from "axios"

export default async function BlogPage({params}: any){
    const postId = params.postId
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    const data = response.data;

    return <div>
        Blog Page {postId}

        <br />
        title - {data.title}

        <br />
        body - {data.body}
    </div>
}
