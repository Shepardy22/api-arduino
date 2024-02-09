import { NextResponse } from "next/server";

const comando = "ligar";

const comando2 = "desligar";

export async function GET(request) {
    
    return NextResponse.json({ comando: comando });
    };


export async function POST(request) {
    const body = await request.json();
    console.log(body);
    if (body.comando === "ligar") {
        return NextResponse.json({ comando: comando });
    } else {
        return NextResponse.json({ comando: comando2 });
    }
}