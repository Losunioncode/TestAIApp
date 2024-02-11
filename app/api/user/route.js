import { connectToDB } from "@/utils/database"
import User from "@/models/user"
import { NextResponse } from "next/server"


export const POST = async (req) => {
    const { name, email, image } = await req.json()
    await connectToDB()
    await User.create({ name, email, image })
    console.log('the callback here')
    return NextResponse.json({ message: "User Registered"}, { status: 201 } )
}