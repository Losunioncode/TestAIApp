'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { redirect } from 'next/navigation'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Printer } from "lucide-react"
import { useReactToPrint } from 'react-to-print'
import{ TestViewForm } from '@/components/TestViewForm'
import { useRouter } from "next/navigation";




const TestPDF = ({ params }) => {

    const [ data , setData ] = useState([])
    const componentToPDF = useRef()
    const [testPDFQuestions, setTestPDFQuestions] = useState([])
    const router = useRouter()
    const [testPDFTitle, setTestPDFTitle] = useState('')

    const handlePrintPDF = useReactToPrint({
        content: () => componentToPDF.current
    })
    const specificId = params.id
    useEffect(() => {
        
        const getTest = async () => {
            try {
                const res = await fetch('https://testpdfapp.onrender.com/api/getTestId', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 
                            data: specificId
                    })
                })
                

                if(res.ok){
                    const recievedData = await res.json()
                    setData(recievedData.specificTestPDF)
                    const questionsForTheTest = JSON.parse(recievedData.specificTestPDF.content)
                    setTestPDFQuestions(questionsForTheTest.questions)
                    setTestPDFTitle(recievedData.specificTestPDF.title)
                } else {
                    router.push('/error')
                }

              } catch(err){
                    console.log(`${err.message}`)
                    
              }
         }

         getTest()
            
        
    }, [])

    return (
       
       
       <section className="bg-darkBlue min-h-[1666px] ">
         
            <div className="pt-[120px]">
                <div className="flex justify-center">
                        <button onClick= {() => {
                            router.push('/profile')
                        }} className="hero-color px-[25px] gap-[12px] font-bold py-[11px] sm:right-[20rem] top-[20px] rounded-[6px] sm:top-[1rem] cursor-pointer hover:opacity-[.94]">
                                
                                    Back to Profile
                                
                        </button>
                        <button onClick= {handlePrintPDF} className="hero-color px-[25px] ml-[10px] flex gap-[12px] font-bold py-[11px] sm:right-[20rem] top-[20px] rounded-[6px] sm:top-[1rem] cursor-pointer hover:opacity-[.94]">
                            <Printer />
                            Save or Print the Test
                        </button>
                </div>
                
                
            </div>

            <div className="mt-[4rem] ">
                    <TestViewForm testPDFQuestions={testPDFQuestions} testPDFTitle={testPDFTitle} ref= {componentToPDF}/>
            </div>
        </section>
      )
}


export default TestPDF