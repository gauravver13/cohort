export default function({params}: any) {
    return (
        <>
        <h1>hello, I am here! in blogs</h1>
        <h2>and here the other dynamic route that is going to be handled only if you give it in the URL</h2>
        <h3>{JSON.stringify(params.folderIds)}</h3>
        </>
    )
}