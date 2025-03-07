import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center m-12 p-12 bg-amber-100 rounded-2xl text-2xl font-bold text-black">
        
      <h1>Static Side Rendering</h1>
      <h2>The best way, It is more optimised, seo optimised and components can&apos;t be re rendered!</h2>
      <h3>Check in builds: If it indicates with o-It is static site generation</h3>
      <h3>and if it is indicated via f-It server or client side generation</h3>
      </div>
      <div className="m-6 flex justify-center items-center">
      <Image
      src="/image.png"
      width={500}
      height={500}
      alt="Static Side Rendering"
    />
      </div>
    </>
  )
}