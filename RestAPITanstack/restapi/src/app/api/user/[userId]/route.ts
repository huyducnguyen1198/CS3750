import { db } from "@/lib/db";
import { NextResponse } from "next/server";


interface UserProps{
    params:{
        userId: string
    }
}


export async function GET(req: Request, context: UserProps){
    try {
        const {userId} = context.params;
        if (!userId) {
            return NextResponse.json(new Error("userId is required"), {status: 400});
        }
        const user = await db.user.findUnique({
            where: {
                userId: parseInt(context.params.userId),
            }
        });
        return NextResponse.json(user, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}


export async function DELETE(req: Request, context: UserProps){
    try {
        const {userId} = context.params;
        if (!userId) {
            return NextResponse.json(new Error("userId is required"), {status: 400});
        }
        const user = await db.user.delete({
            where: {
                userId: parseInt(context.params.userId),
            }
        });
        return NextResponse.json(user, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}