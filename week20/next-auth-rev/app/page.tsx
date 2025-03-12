
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

import { getServerSession } from "next-auth";


export default async function Home() {
   const session = await getServerSession();
  //  const userProfile = db.avatars.findOne({
  //   where: {
  //     // email: "bla-blaEmail@gmail.com"
  //     email: session.email  
  //   }
  //  })
  return ( <div>
      <div className="bg-green-300 w-full h-1/2 m-2 p-4 text-lg text-center font-bold  text-blue-700">
        SESSION:: {JSON.stringify(session)}
        <br />
        USER_EMAIL:: HELLO {(session?.user?.name)?.toUpperCase()}
        <br />
        cool
        <h3>this is server side session where we can call the db and get the users info and show them in a real time</h3>
        <h4>apart from this this is also SEO Optimised </h4>
        <h5>Better use this approach</h5>
      </div>
  </div>
  );
}



// NEEDS TO BE WRAPPED UNDER SESSION PROVIDER::
// function OtherHome() {
//   const session = useSession();

//   return (
//     <div>
//       <div className="w-full h-12 bg-gray-400 flex justify-center">
//         {session.status === "authenticated" && 
//         <button className="bg-red-600 text-black font-bold p-2 rounded-lg"
//         onClick={() => signOut()}>Sign Out</button>}
//         {session.status === "unauthenticated" && <button className="bg-red-600 text-black font-bold p-2 rounded-lg"
//         onClick={() => signIn()}>Sign In</button>}
//       </div>
//     </div>
//   )
// }