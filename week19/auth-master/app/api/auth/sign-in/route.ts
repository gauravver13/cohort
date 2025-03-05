import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/db";


const prismaClient = prisma;

export async function POST(req: NextRequest) {
  const body = await req.json();

  const user = await prismaClient.user.findFirst({
    where: {
      username: body.username,
      password: body.password,
    },
  });

  if(!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  console.log("Request body:", body);
  return NextResponse.json({ message: "Sign-in successful" });
}