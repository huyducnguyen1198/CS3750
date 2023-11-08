import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface UserProps{
    params:{
        userId: string
    }
}   

export async function POST(req: Request, context: UserProps){
    try{
        const body = await req.json();

        //userTypeName
        if(db.userType.findUnique({where: {userTypeName: body.userTypeName}}) == null){
            return NextResponse.json(new Error("userTypeId does not exist"), {status: 400});
        }

        
        const newUser = await db.user.create({
            data:{
                userTypeName: body.userTypeName,
                totalPlayTime: parseInt(body.totalPlayTime)||0,
                exp: parseInt(body.exp)||0,
                pp: parseInt(body.pp)||0,
                stars: parseInt(body.stars)||0,
            }
        });
        return NextResponse.json(newUser, {status: 200});
    }catch(error){
        return NextResponse.json(error, {status: 500});
    }
}