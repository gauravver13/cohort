"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("connection string");
//get it from neon db 
// and ofc try it with postgresql
const pgClient2 = new pg_1.Client({
    user: "neondb_owner",
    password: "password",
    port: 5432,
    host: "localhost",
    database: "neondb",
    secure: true,
    ssl: {
        rejectUnauthorized: false
    }
});
// both are the same, both works! just two ways to do things.
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        const response = yield pgClient.query("SELECT * FROM users");
        console.log(response.rows);
        console.log(response);
    });
}
// await pgClient.connect(); // can't write await directly.
main();
