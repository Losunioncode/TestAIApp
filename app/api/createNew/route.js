import { connectToDB } from "@/utils/database";
import OpenAI from "openai";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import TestAIPDF from "@/models/testPDF";

import { getServerSession } from "next-auth";

const openAI = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
})



export const POST = async (req) => {
    const recievedData = await req.json()
    const amount = recievedData.data.amount
    await connectToDB()
    const subjectOfTheTest = recievedData.data.subject
    const topicOfTheSubject = recievedData.data.topic
    let typeOfTheTest = recievedData.data.type

    if(typeOfTheTest === ''){
        typeOfTheTest = 3
    } 
    const session = await getServerSession(authOptions)
   
    const response = await openAI.chat.completions.create({
       
        messages: [{ role: 'user', content:                
                  `Write me ${amount} test questions. 
                  topic:${topicOfTheSubject}. subject: ${subjectOfTheTest}. each questions should have a ${typeOfTheTest} answers. the example 
                  {"questions" : [ { "question" : ["exampleOfQuestion"], "possibleAnswers" : ["possibleAnswer1", 
                  "possibleAnswer2", "possibleAnswer3"]} ]} thats a json format should be applied for 
                  each question message. the topic should be understandable. Each question should be original. Each of possible questions should be in array: like "question" : ["exampleOfQuestion"]. if it's not return emtpy
                   string.(dont use "\n" tag at all)` 
            
                }],
        
   
         model: 'gpt-3.5-turbo',
      
    });

    const messageTestAI= response.choices[0].message.content
    if(!(JSON.parse(messageTestAI))){
        throw new Error('failed to recieve correct data')    
    }
    
    try {
        const userDataBaseId = await User.findOne({ email: session.user.email })
        const createNewPDFTest = new TestAIPDF({
            author: userDataBaseId.id,
            content: messageTestAI,
            title: topicOfTheSubject
        })
        
        const savedPDFTest = await createNewPDFTest.save()
        userDataBaseId.PDFTests = userDataBaseId.PDFTests.concat(savedPDFTest._id)
        userDataBaseId.save()
        return NextResponse.json({ message: "hey" }, { status: 201 })
    
    }catch(err){
        throw new Error(`the error has occured ${err.message}`)
    }
    

    
    // console.log(checkFormatMessage)

    







}