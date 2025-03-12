import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            // name: "Login with email",
            name: "email",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "igaurav" },
              email: {label: "Email", type: "text", placeholder: "igaurav@gmail.com"},
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                console.log(username)
                console.log(password)
                const user = {
                    id: '1',
                    name: 'gaurav',
                    username: "igaurav",
                    email: "igaurav@gmail.com"
                }

                // db request to check if this username and password are correct!

                // set the db here
                if(user) {
                    return user
                } else {
                    return null;
                }
            }
          }),

        GoogleProvider({
            // clientId: process.env.GOOGLE_CLIENT_ID,
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET
            clientId: "asd",
            clientSecret: "zxcv"
          }),

          GitHubProvider({
            clientId: "zxc",
            clientSecret: "uiop"
          })

        
    ]
})


export { handler as GET, handler as POST }