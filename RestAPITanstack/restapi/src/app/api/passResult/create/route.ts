import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { parse } from "path";


export async function POST(req: Request){
    try{
        const body = await req.json();
            
        //userId
        if(db.user.findUnique({where: {userId: parseInt(body.userId)}}) == null){
            return NextResponse.json(new Error("userId does not exist"), {status: 400});
        }
        //levelId
        if(db.level.findUnique({where: {levelId: parseInt(body.levelId)}}) == null){
            return NextResponse.json(new Error("levelId does not exist"), {status: 400});
        }
        //score
        if(body.score == null){
            return NextResponse.json(new Error("score does not exist"), {status: 400});
        }
        //hits
        if(body.hits == null){
            return NextResponse.json(new Error("hits does not exist"), {status: 400});
        }
        //misses
        if(body.misses == null){
            return NextResponse.json(new Error("misses does not exist"), {status: 400});
        }
        const passResult = await db.passResult.create({
            data:{
                userId: parseInt(body.userId),
                levelId: parseInt(body.levelId),
                score: parseInt(body.score),
                hits: parseInt(body.hits),
                misses: parseInt(body.misses),
                healthBarData: parseInt(body.healthBarData) || 0,
                replayData:0,
                timestamp: 0,

            }
        });
        return NextResponse.json(passResult, {status: 200});

    }catch(error){
        return NextResponse.json(error, {status: 500});
    }
}