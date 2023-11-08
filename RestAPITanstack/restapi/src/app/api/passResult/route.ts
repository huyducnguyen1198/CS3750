import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(req: Request){
    try {
        const passResult = await db.passResult.findMany();
        return NextResponse.json(passResult, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}