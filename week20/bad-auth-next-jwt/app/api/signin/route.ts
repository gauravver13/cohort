import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
// ideally we should should check th username and password in the DB and onyl if it is right, we should return the jwt;

    const body = await req.json();

    // @ts-ignore
    const { username, password } = req.body;

    // check in the db

    const userId = 1;
    const token = jwt.sign({
        userId
    }, "SECRET");

    return NextResponse.json({
        token
    })
}