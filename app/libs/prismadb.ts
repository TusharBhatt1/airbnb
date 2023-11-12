import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV != "production"){
    globalThis.prisma= client
}

export default client

//nextjs hot reloading can create multiple new PrismaClient() instances
//this way we assign prisma client to globalThis variable 