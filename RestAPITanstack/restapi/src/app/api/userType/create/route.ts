import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request){
    try{
        const body = await req.json();
        const newuserType = await db.userType.create({
            data: {
                userTypeName: body.userTypeName,
                userTypeDesc: body.userTypeDesc
            }
        });
        return NextResponse.json(newuserType, {status: 200});
    }catch(e){
        return NextResponse.json({message: 'Could not create!'}, {status: 500});
    }
}