import { db } from "@/lib/db";
import {    NextResponse } from "next/server";

export async function GET(req:Request){
    try{
        const song = await db.level.findMany();
        return NextResponse.json(song, {status: 200});
    }catch(e){
        return NextResponse.json({message: 'Could not fetch!'}, {status: 500});
    }
}