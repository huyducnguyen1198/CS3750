import { db } from "@/lib/db";
import { NextResponse } from "next/server";


//todo check beatmapSetId for uniqueness
export async function POST(req: Request){
    try{
        const body = await req.json();
        //beatmapSetId
        if (!body.beatmapSetId) {
            return NextResponse.json(new Error("beatmapSetId is required"), {status: 400});
        }
        //songUrl
        if (!body.songUrl) {
            return NextResponse.json(new Error("songUrl is required"), {status: 400});
        }
        //title
        if (!body.title) {
            return NextResponse.json(new Error("title is required"), {status: 400});
        }
        
        const newSong = await db.song.create({
            data:{
                beatmapSetId: parseInt(body.beatmapSetId),
                songUrl: body.songUrl,
                title: body.title,
                titleUnicode: body.titleUnicode || "",
                artist: body.artist || "",
                artistUnicode: body.artistUnicode || ""
            }
        });
        return NextResponse.json(newSong, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}