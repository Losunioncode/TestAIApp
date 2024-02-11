import { connectToDB } from "@/utils/database"
import TestAIPDF from "@/models/testPDF"
import { NextResponse } from "next/server"


export const POST = async (req) => {
    
    try {
        await connectToDB()
        const data = await req.json()
        const testPDFToRemove = await TestAIPDF.deleteMany({_id: data.data})

        return NextResponse.json({item: `item  was removed successfully`}, {status: 201})
    
    }catch(err){

        return NextResponse.json({err: err.message}, {status: 401})
    }
    
}