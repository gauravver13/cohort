import { PrismaClient } from "@prisma/client";


const prismaClientSingleton = () => {

    return new PrismaClient();

}


// declare global {
//     var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
// }

// @ts-ignore
const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
    // @ts-ignore
    globalThis.prisma = prisma;
}

export default prisma;
