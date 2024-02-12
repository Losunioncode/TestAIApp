'use client'
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import ProcessContext from '../(ProcessContext)/ProcessContext';
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import TestsContainer from '@/components/TestsContainer';
import Example from '@/components/Example';

const Profile = () => {
  const [removeBlockShow, setRemoveBlockShow] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [stateTests, setStateTests] = useState(false)

  const [process, dispatch] = useContext(ProcessContext)
  const [ pdfTests, setPdfTests ] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [itemsToRemove, setItemsToRemove] = useState([])

  


  const { data: session, status} = useSession({
      required: true,
      onUnauthenticated(){
         redirect('/')    
      }
  })

  
  useEffect(() => {
      const getPDFTests = async () => {       
         try {
            setLoading(true)
            const res = await fetch('https://testpdfapp.onrender.com/api/getTests')

            
            if (res.ok){
   
               const recievedData = await res.json()
            
               setPdfTests(recievedData.data)
               
               setLoading(false)
               dispatch({type: "setStateDefault"})
            }
         }catch(err){
              router.push('/error')
         }

         
      }

      
   
   
   getPDFTests()
  
   }, [])



  
  
  
   const handleConfirmRemoveTests = async () => {
         try {
            
            const removePDFTests = await fetch('https://makertestapp.vercel.app/api/removeTestPDF', {
                  
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ 
                           data: itemsToRemove
                  })
               
            })

            const res = await removePDFTests.json()
            console.log(res)
            const updatedArrayPDFS = pdfTests.filter((item) => !itemsToRemove.includes(item.id))

            if(removePDFTests.ok){
                  setPdfTests(updatedArrayPDFS)
                  setRemoveBlockShow(false)
            }

            

      }catch(err){
         
         router.push('/error')
      }

   }

  const handleReceiveSomeTests = async (e) => {

      setItemsToRemove(itemsToRemove.concat(e.target.value))

      
  }
  



  const handleCancelRemoveShow = () => {
      setItemsToRemove([])
      setRemoveBlockShow(false)
  }

 


  return (
    <section className="bg-darkBlue sm:h-[100vh] h-full w-full">
        <div className="max-w-[1440px] mx-auto ">
                <div className="flex sm:flex-row items-center sm:justify-around justify-center">
                     <h1 className="mt-[45px] font-bold hidden text-[20px] sm:block text-hero-text ">Welcome, {session?.user.email }</h1>
                     
                        <Link
                           href="/process"
                           
                           className="sm:px-[45px] hero-color flex flex-row justify-between px-[25px] order-last s gap-[12px] mt-[45px] font-bold  sm:ml-[45px]  py-[11px] rounded-[6px] items-center boxShadow1 cursor-pointer hover:opacity-[.94]"
                        >   
                           Create a Test
                        </Link>
                     <button

                        onClick={() => {
                           signOut() 
                        }}
                        
                        className="sm:px-[45px] hero-color px-[25px] ml-[6px] order-last gap-[12px] mt-[45px] font-bold  sm:ml-[88px]  py-[11px] rounded-[6px]  cursor-pointer hover:opacity-[.94]"
                     >    
                        Sign out
                     </button>

                     <Link href="/" className="sm:order-last hidden">
                        <h4 className="text-[16px] font-light text-hero-text">Logout</h4>
                     </Link>
                 


                     
                </div>
               
                { pdfTests && (
                           <div className="flex items-center mt-[6rem] ml-[3rem] md:mt-[3rem] sm:ml-[8rem] ">
                                <TestsContainer 
                                       TestPDFArray={pdfTests} 
                                       handleReceiveSomeTests= {handleReceiveSomeTests} 
                                       removeBlockShow= {removeBlockShow} 
                                       handleConfirmRemoveTests= {handleConfirmRemoveTests}
                                       handleCancelRemoveShow={handleCancelRemoveShow}
                                       stateTests={stateTests}
                                       loading= {loading}
                                       handleRemoveBlockShow= {() => setRemoveBlockShow(!removeBlockShow)}
                                  />
                            </div>
                        
                )}
                

        </div>

        
    </section>
  )


}



export default Profile






export const dynamic = "force-dynamic"
