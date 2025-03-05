import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";


const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();

  prismaClient.user.client.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  console.log("Request body:", body);
  return NextResponse.json({ message: "Sign-in successful" });
}