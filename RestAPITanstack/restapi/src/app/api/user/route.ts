import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    try{
        const songs = await db.user.findMany();
        return NextResponse.json(songs, {status: 200});
    }catch(error){
        return NextResponse.json(error, {status: 500});
    }
}