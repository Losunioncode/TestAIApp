'use client'
import { Wand2, Check, FileText } from "lucide-react"
import Image from "next/image"
import Link from 'next/link'
import { useSession, signIn, signOut} from "next-auth/react"

import { redirect, useRouter } from "next/navigation"


const Hero = () => {

  const { data: session } = useSession()
  const router = useRouter()
  console.log(session)
  
  if(session){
    
        router.push("/process")
  }
  
  return (
    <div id="section-hero" className="flex justify-center my-[65px] sm:my-[125px] ">
                <div className="flex flex-col gap-[11px] sm:justify-center items-center">
                    <div className="sm:flex sm:justify-around block items-center justify-center ">
                        <div className="flex flex-col justify-center sm:items-start md:mr-[9rem] items-center sm:mr-[11rem] ">
                            <div className="px-[20px] hero-color flex flex-row items-center py-[11px] rounded-[6px] text-[14px] font-bold justify-center  ">
                                Powered by AI
                                <Wand2 className="ml-[10px]" strokeWidth={2}/>
                            </div> 
                            
                            <h1 className="sm:text-[61px] sm:text-start text-[40px] font-black leading-tight text-center mt-[45px] text-hero-text sm:mt-[25px] hero-text-shadow ">
                                <p> <span className="text-hero-special-text ">Create </span> quick <span className="text-hero-special-text">PDF test file</span></p>
                                <p>for your work and study</p>
                                
                            </h1>
                            <p className="text-[21px] sm:text-start text-hero-text text-center sm:mt-[10px] font-black mt-[25px] hero-text-shadow ">
                                    AI will make your test for you ,  upload  as PDF test file<span className=""></span> 
                            </p>
                            
                            <ul className="mt-[25px] ">
                                <li className= "text-[18px] flex flex-row text-[#C9C9C9]/[.81] mt-[6px] font-bold" > 
                                    <Check className="text-[#FFF7B1] mr-[6px] " strokeWidth={3}/>
                                    AI assistance 
                                </li>
                                <li className="text-[18px] flex flex-row text-[#C9C9C9]/[.81] mt-[6px] font-bold "> 
                                    <Check className="text-[#FFF7B1] mr-[6px] " strokeWidth={3}/>
                                    Different structures of the test 
                                    </li>
                                <li className="text-[18px] flex flex-row text-[#C9C9C9]/[.81] mt-[6px] font-bold ">
                                    <Check className="text-[#FFF7B1] mr-[6px] " strokeWidth={3}/>
                                    Any topic that you wish!
                                </li>
                                <li className="text-[18px] flex flex-row text-[#C9C9C9]/[.81] mt-[6px] font-bold ">
                                    <Check className="text-[#FFF7B1] mr-[6px] " strokeWidth={3}/>
                                    Print and PDF upload!
                                </li>
                            </ul>
                            
                        <div className="my-[45px]">
                                <button className="px-[45px] hero-color flex flex-row justify-between gap-[12px] py-[11px]  rounded-[6px] items-center boxShadow1 cursor-pointer hover:opacity-[.94]"
                                        onClick={() => {
                                            signIn('google')
                                        }}
                                    >
                                        <div className="font-bold color text-[16px] text-text-darkBlue1  ">Make a test </div>
                                        <FileText size={26} />

                                </button>
                        </div>
                        </div>
                        <div className="z-40 hidden sm:block ">
                            <Image src="/images/TestHero3.png" width={445} height={445} alt="Example"/>
                        </div>
                        
                    </div>

                    <div className="absolute lg:right-[0rem] 2xl:right-[31rem] top-[83px] z-0">
                            <Image src="/images/TestHero4.png" width={488} height={445} alt="ExampleBack"/>

                    </div>
    
                </div>
</div>
  )
}


export default Hero