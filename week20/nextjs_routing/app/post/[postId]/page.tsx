import axios from "axios";
// /post/1
// /post/2
// /post/3
// /post/5

// Dynamic Routing::

export default async function BlogPage({ params }: {
    params: {
        postId: string
    }
}) {
    const post = params.postId;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`);
    const data = response.data;
    return (
        <div>
            <h1 className="text-4xl font-bold m-4">Blog Page</h1>
            <h2 className="text-4xl font-bold m-4">Dynamic String:</h2>   // check posts
            <h3 className="text-yellow-200">{data.title}</h3>
            <p className="text-blue-300">{data.body}</p>
        </div>
    )
}