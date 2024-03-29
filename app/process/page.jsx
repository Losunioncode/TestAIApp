'use client'
import { useState, useContext} from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import ProcessContext from '../(ProcessContext)/ProcessContext'

import TestForm from '@/components/TestForm'

const TestProcess = () => {
  
  const [ process, dispatch ] = useContext(ProcessContext)
  const [loading, setLoading]= useState(false)
  const [showTypeErrorMessage, setShowTypeErrorMessage] = useState('')
  
  const router = useRouter()
  

  const { data: session, status} = useSession({
    required: true,
    onUnauthenticated(){   
        redirect('/')
    }  
  })  

    const submitTestForm = async (e) => {
            e.preventDefault()    
            try {    

                if(process.type === ''){
                     
                     setShowTypeErrorMessage('Please choose type of the test you would like to use')
                     return
                }
                
                
                if(loading){
                    return 
                }
                
                const newItemTest = {
                    subject: process.subject,
                    topic: process.topic,
                    amount: process.amount,
                    type: process.type
                }
                
                setLoading(true)
                
                const res = await fetch('https://testpdfapp.onrender.com/api/createNew', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 
                            data: newItemTest
                    
                    })
                })
                
                const data = await res.json()
                console.log(data)


                if(res.ok){
                    
                    setLoading(false)

                    router.push('/profile')

                } else {
                    console.log(res)
                    router.push('/error')
                }

            }catch(e) {                
                console.log(`The error has occured ${e.message}`)
            }
            
    }
  
  
    return (        
        <TestForm             
                handleSubmitForm ={submitTestForm}
                showTypeErrorMessage= {showTypeErrorMessage}
                loading= {loading}
        />

    ) 
}

export default TestProcess
export const dynamic = "force-dynamic"
