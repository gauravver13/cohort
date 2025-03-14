import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ClientAuth from "../components/ClientAuth"; // Import Client Component

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <>
          <h1 className="bg-red-300 m-6">Welcome, {session.user?.name}!</h1>
          <h2 className="m-4 font-bold ">{JSON.stringify(session)}</h2>
          <h2 className="m-4 font-bold ">{JSON.stringify(session.user?.image)}</h2>

        </>
      ) : (
        <p>You must be logged in to access this page.</p>
      )}
      <ClientAuth /> {/* Wraps AuthButton in SessionProvider only here */}
    </div>
  );
}
