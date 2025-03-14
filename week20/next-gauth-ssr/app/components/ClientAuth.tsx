"use client";

import { SessionProvider } from "next-auth/react";
import AuthButton from "./AuthButton"; // Import the button component

export default function ClientAuth() {
  return (
    <SessionProvider>
      <AuthButton />
    </SessionProvider>
  );
}
