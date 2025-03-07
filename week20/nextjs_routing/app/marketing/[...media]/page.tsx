export default function MediaPage({params}: any) {
    return (
        <>
            <h5 className="text-2xl font-extrabold m-12 text-amber-600">Here's dynamic routing url cathes-all-segment: {JSON.stringify(params.media)}</h5>
            <h1 className="text-5xl font-extrabold text-amber-300">Catch-All Segment Routing::</h1>
            <h1 className="text-5xl font-extrabold text-amber-600">Digital media platform- sub routes handle by the control by this routing method in react.</h1>
            <h1 className="text-4xl font-bold m-4">Media Page</h1>
            <h2 className="text-4xl font-bold m-4">Static String:</h2>
            <h3 className="text-yellow-200">Media Page</h3>
            <p className="text-blue-300">This is a static page.</p>
        </>
    )
}