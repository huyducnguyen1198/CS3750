import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface passResultProps {
    params: {
        passResultId: string;
    }
};

export async function GET(req: Request, context: passResultProps){
    try {
        const passResult = await db.passResult.findUnique({
            where: {passResultId: parseInt(context.params.passResultId)}
        });
        return NextResponse.json(passResult, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}

export async function DELETE(req: Request, context: passResultProps){
    try {
        const passResult = await db.passResult.delete({
            where: {passResultId: parseInt(context.params.passResultId)}
        });
        return NextResponse.json(passResult, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}

