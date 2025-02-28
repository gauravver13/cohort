import { Client } from "pg"

const pgClient = new Client("connection string");

//get it from neon db 
// and ofc try it with postgresql


const pgClient2 = new Client({
    user: "neondb_owner",
    password: "password",
    port: 5432,
    host: "localhost",
    database: "neondb",
    ssl: true,
});

// both are the same, both works! just two ways to do things.

async function main() {
    await pgClient.connect();  

    const response = await pgClient.query("SELECT * FROM users");
    console.log(response.rows);
    console.log(response);
}

// await pgClient.connect(); // can't write await directly.

main();