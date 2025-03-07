export default function Layout({ children }: any) {
    return (
        <>
            <div className="w-full h-12 mb-2  bg-amber-100 text-black flex justify-center">Layout Navbar</div>
            {children}
            <div className="w-full h-12 text-2xl text-black flex justify-center bg-red-300">Layout FOOTER</div>
        </>
    )
}