import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "igaurav" },
              email: { label: "Email", type: "text", placeholder: "igaurav@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              const user = { id: "1", name: "J Smith", email: "jsmith@example.com", Password: "zxcvbnm" }

            //   if (user) {
            //     return user
            //   } else {
            //     return null
            //   }

              return {
                id: "1",
                name: "gaurav",
                email: "igaurav@gmail.com",
                password: "zxcvbnm"
              }
            }
          })
    ]
})

export { handler as GET, handler as POST }