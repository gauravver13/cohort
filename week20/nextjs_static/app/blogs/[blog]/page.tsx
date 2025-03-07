export default async function Blog({params}: {
    params: Promise<{
        blog: string;
    }>
}) {
    const blogId = (await params).blog;
    return (
        <>
            <h1>Blogs:</h1>
            <h2>{blogId}</h2>
        </>
    )

}