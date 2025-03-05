import { NextRequest, NextResponse } from "next/server";

import  prisma from "../../../lib/db";

// import { PrismaClient } from "@prisma/client";


const prismaClient = prisma;

export async function POST(req: NextRequest) {
  const body = await req.json();

  await prismaClient.user.create({
    data: {
      username: body.username,
      email: body.email,
      password: body.password,
    },
  });

  console.log("Request body:", body);
  return NextResponse.json({ message: "User Signed-Up successful" });
}