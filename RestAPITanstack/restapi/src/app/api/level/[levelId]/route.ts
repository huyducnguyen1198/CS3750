import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface LevelProps {
    params: {
        levelId: string
    }
}

export async function GET(req: Request, context: LevelProps){

    try{
        const {levelId} = context.params;
        if (!levelId) {
            return NextResponse.json(new Error("levelId is required"), {status: 400});
        }
        const level = await db.level.findUnique({
            where: {
                levelId: parseInt(context.params.levelId),
            }
        });
        if(level == null){
            return NextResponse.json(new Error("levelId does not exist"), {status: 400});
        }
        return NextResponse.json(level, {status: 200});
    }catch(error){
        return NextResponse.json(error, {status: 500});
    }
}

export async function DELETE(req: Request, context: LevelProps){
    try{
        const {levelId} = context.params;
        if (!levelId) {
            return NextResponse.json(new Error("levelId is required"), {status: 400});
        }
        if (db.level.findUnique({where: {levelId: parseInt(context.params.levelId)}}) == null) {
            return NextResponse.json(new Error("levelId does not exist"), {status: 400});
        }
        await db.level.delete({
            where: {
                levelId: parseInt(context.params.levelId),
            }
        });
        return NextResponse.json({message: 'Deleted!'}, {status: 200});
    }catch(error){
        return NextResponse.json(error, {status: 500});
    }
}
