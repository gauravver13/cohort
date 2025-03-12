"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";


export default function Home() {
  return (
    <SessionProvider>
        <OtherHome />
    </SessionProvider>
  );
}


function OtherHome() {
  const session = useSession();

  return (
    <div>
      <div className="w-full h-12 bg-gray-400 flex justify-center">
        {session.status === "authenticated" && 
        <button className="bg-red-600 text-black font-bold p-2 rounded-lg"
        onClick={() => signOut()}>Sign Out</button>}
        {session.status === "unauthenticated" && <button className="bg-red-600 text-black font-bold p-2 rounded-lg"
        onClick={() => signIn()}>Sign In</button>}
      </div>
    </div>
  )
}