import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(req:Request){
    
    try{
        const userType = await db.userType.findMany();
        return NextResponse.json(userType, {status: 200,
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3001',
                'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }});
        
    }catch(e){
        return NextResponse.json({message: 'Could not fetch!'}, {status: 500});
    }
}
