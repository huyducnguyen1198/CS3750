import { db } from "@/lib/db";
import { NextResponse } from "next/server";


//todo check beatmapId for uniqueness
export async function POST(req: Request){
    try{
        const body = await req.json();
        //songId
        if (!body.songId) {
            return NextResponse.json(new Error("songId is required"), {status: 400});
        }

        if(db.song.findUnique({where: {songId: parseInt(body.songId)}}) == null){
            return NextResponse.json(new Error("songId does not exist"), {status: 400});
        }
        console.log("POST /api/level/create");

        //beatmapId
        if (!body.beatmapId) {
            return NextResponse.json(new Error("beatmapId is required"), {status: 400});
        }
        //difficulty
        if (!body.difficulty) {
            return NextResponse.json(new Error("difficulty is required"), {status: 400});
        }
        //approachRate
        if (!body.approachRate) {
            return NextResponse.json(new Error("approachRate is required"), {status: 400});
        }
        //beatmapUrl
        if (!body.beatmapUrl) {
            return NextResponse.json(new Error("beatmapUrl is required"), {status: 400});
        }

        const newLevel = await db.level.create({
            data:{
                songId: parseInt(body.songId),
                beatmapId: parseInt(body.beatmapId),
                difficulty: parseFloat(body.difficulty),
                approachRate: parseFloat(body.approachRate),
                beatmapUrl: body.beatmapUrl,
                image: body.image || "",
                noteData: body.noteData || "",
                breakData: body.breakData || "",
            }
        });
        return NextResponse.json(newLevel, {status: 200});
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}