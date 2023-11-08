import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface SongProps{
    params:{
        songId: string
    }
}

export async function GET(req: Request, context: SongProps){
    
    try{
        const {songId} = context.params;
        
        const song = await db.song.findUnique({
            where: {
                songId: parseInt(context.params.songId),
            }
        });
        console.log(song);
        return NextResponse.json(song, {status: 200});
    }catch(e){
        return NextResponse.json({message: 'Could not fetch!'}, {status: 500});
    }
}

export async function DELETE(req: Request, context: SongProps){
    try{
        const {songId} = context.params;
        await db.song.delete({
            where: {
                songId: parseInt(context.params.songId),
            }
        });
        return NextResponse.json({message: 'Deleted!'}, {status: 200});
    }catch(e){
        return NextResponse.json({message: 'Could not delete!'}, {status: 500});
    }
}