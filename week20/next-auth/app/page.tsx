"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  )
}


function RealHome() {

  
  const session = useSession();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    <div className="bg-blue-100 flex align-middle m-auto justify-around w-full h-12 text-black font-bold rounded-md"> 
      <div>LOGO</div>
      <div>CONTENT</div>

       
        {session.status === "authenticated" && 
          <button className="bg-blue-400 rounded-lg p-3 m-1 flex justify-center align-middle"
          onClick={() => {
            signOut()
          }}>Logout
          </button>
        }

        {session.status === "unauthenticated" &&
          <button className="bg-blue-400 rounded-lg p-3 m-1 flex justify-center align-middle"
          onClick={() => {
            signIn()
          }}>Login
          </button>
        }
    </div>

    <div className="bg-red-200 text-black font-bold w-full m-2 h-20 rounded-lg p-2">{JSON.stringify(session)}</div>

    </div>
  );
}
