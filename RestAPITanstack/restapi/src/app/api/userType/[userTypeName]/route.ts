import { db } from "@/lib/db";
import {  NextResponse } from "next/server";

interface userTypeProps{
    params: {
        userTypeName: string,
        userTypeDesc: string;
    };
}

export async function GET(req: Request, context: userTypeProps){
    try{
        const {userTypeName} = context.params;
        const selectedUserType = await db.userType.findUnique({
            where: {
                userTypeName: userTypeName
            }
        });
        return NextResponse.json(selectedUserType, {status: 200});
    }catch(e){
        return NextResponse.json({message: 'Could not fetch!'}, {status: 500});
    }
};

export async function DELETE(req: Request, context: userTypeProps){
    try{
        const {userTypeName} = context.params;
        await db.userType.delete({
            where: {
                userTypeName: userTypeName
            }
        });
        return NextResponse.json({message: 'Deleted!'}, {status: 200});
    }catch(e){
        return NextResponse.json({message: 'Could not delete!'}, {status: 500});
    }
};


export async function PATCH(req: Request, context: userTypeProps ){
    try{
        const {userTypeName} = context.params;
        const {userTypeDesc} = await req.json();
        const updatedUserType = await db.userType.update({
            where: {
                userTypeName: userTypeName
            },
            data: {
                userTypeDesc: undefined
            }
        });
        console.log(userTypeName);
        console.log((await db.userType.findMany()).map((userType) => userType.userTypeName + " " + userType.userTypeDesc    ));
        return NextResponse.json({message: updatedUserType}, {status: 200});
    }catch(e){
        return NextResponse.json({message: 'Could not update!'}, {status: 500});
    }
}