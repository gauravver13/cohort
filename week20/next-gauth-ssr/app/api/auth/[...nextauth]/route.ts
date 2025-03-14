import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          }),
    ],
    
    session: {
        strategy: "jwt" as const,                // Uses JWT-based session (serverless)
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }