"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <button
      onClick={() => (session ? signOut() : signIn("google"))}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        backgroundColor: session ? "#ff4d4d" : "#4caf50",
        color: "white",
        border: "none",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      {session ? "Sign Out" : "Sign In with Google"}
    </button>
  );
}
