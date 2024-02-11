import { TestAIPDF } from "@/models/testPDF"
import User from "@/models/user"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { connectToDB } from "@/utils/database"

import { authOptions } from "../auth/[...nextauth]/options"


export const GET = async () => {
  
    try {   
        await connectToDB()

        const session = await getServerSession(authOptions)
        const userDataBaseId = await User.findOne({ email: session.user.email }).populate('PDFTests')
        const testPDFAI = userDataBaseId.PDFTests
        return NextResponse.json({ data: testPDFAI }, { status: 201})

    } catch(err){
        throw new Error(`The error has emerged ${err.message}`)
    }
    

}
export const dynamic = "force-dynamic"