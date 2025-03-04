import { NextResponse } from "next/server";


export function GET() {

    return NextResponse.json({
        id: 1,
        name: 'Leanne Graham',
        email: 'harkirat123@gmail.com'
    });
}


export function POST() {
    return NextResponse.json({
        message: 'User created successfully'
    });
}

