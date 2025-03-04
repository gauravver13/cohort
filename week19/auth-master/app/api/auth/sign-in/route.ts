import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Request body:", body);
  return NextResponse.json({ message: "Sign-in successful" });
}