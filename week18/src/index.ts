console.log("hello wrold");


import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// interface createUser {
//     firstName: string;
//     lastName: string;
// }


async function createUser( {

   await client.user.create({
        data: {
            username: "gaurav",
            password: "zxcvbnm",,
            age: 21,
            city: "Delhi"
        }
    })
        
})



createUser() 
