import TestAIPDF from "@/models/testPDF"
import User from "@/models/user"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"

import { connectToDB } from "@/utils/database"

import { authOptions } from "../auth/[...nextauth]/options"


export const POST = async (req) => {
    await connectToDB()
    const id = await req.json()
    const session = await getServerSession(authOptions)

    // console.log(session)
    
    try {

        const specificTestPDF = await TestAIPDF.findById(id.data).populate('author')
        const authorTestPDF = specificTestPDF.author.email

        if(authorTestPDF !== session.user.email){
            throw new Error('The user is not allowed to get data')
        }
        return NextResponse.json({ specificTestPDF }, { status: 201 })

        
    }catch(err){
        
        throw new Error('the error has occured')
    }
    

}