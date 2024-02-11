'use client'
import { useState, useEffect } from 'react'
import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import { FileText } from "lucide-react"

const Header = () => {

  const [isVisible, setIsVisible] = useState(false)
  
  const [providers, setProviders] = useState(null)


  
    
  return ( 
    <header>
        
         <nav id="#section-header" className= "pt-[20px]">
            <div className="hidden sm:flex flex-wrap justify-around items-center">
                <div className= "flex flex-wrap items-center">
                    <Image src="/bookl.png" width= {40} height= {40} alt="" className= "w-[54px] h-[54px] rounded-[8px]"/>
                    <span className= "text-[23px] font-bold ml-[16px] text-hero-text text-shadow1 font-inter cursor-pointer ">
                        TestExamAI
                    
                    </span>
                </div>
                <div className="flex flex-row items-center ">
                    
                    <Link href="#section-examples" className=""><span className="text-[16px] font-normal  cursor-pointer text-hero-text/[0.84] hover:text-hero-text font-roboto text-shadow1 ">Examples</span></Link>
                    {/* {/* <Link href= "presell" className="text-[16px] ml-10 font-normal cursor-pointer  text-hero-text/[0.84] hover:text-hero-text text-shadow1 font-roboto ">Turorial</Link> */}
                    <Link href= "#section-tutorial" className="text-[16px] ml-10 font-normal cursor-pointer text-hero-text/[0.84] hover:text-hero-text text-shadow1 font-roboto ">Tutorial</Link> 
                </div>
                <button className="px-[45px] hero-color flex flex-row justify-between gap-[12px] py-[11px] rounded-[6px] items-center boxShadow1 cursor-pointer hover:opacity-[.94]"
                    onClick={() => {
                        signIn('google')
                    }}
                >
                    <div className="font-bold color text-[16px] text-text-darkBlue1  ">Make a test </div>
                    <FileText size={26} />

                </button>
            </div>
        
        </nav>

        {!isVisible && 
            
            <button type="button" className="inline-flex items-center p-2 absolute right-0 w-10 h-10 mr-[25px] justify-center text-sm mt-[10px] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white-100 " aria-controls="navbar-default" onClick={() => setIsVisible(!isVisible)}  aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 17 14">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round"  d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
            </button>
        
    } 
    
    
    <div className={` md:hidden flex flex-col h-[365px] inset-x-0  w-[100%] items-center gap-[10px] bg-darkBlue ${isVisible ? 'absolute' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-[10px] mt-[45px] ">
                       <div className= "flex flex-wrap items-center">
                            <Image src="/bookl.png" width= {45} height={45} alt="logo" className= "h-[45px] w-[45px]"/>
                            <span className= "text-[23px] font-extrabold ml-2 text-hero-text text-shadow1 font-roboto">
                                TestExamAI
                            
                            </span>
                        </div>
                        <Link href= "process" className=""><span className="text-[20px] font-normal  cursor-pointer text-hero-text  font-roboto  ">Home</span></Link>
                        <Link href= "presell" className="text-[20px]  font-normal cursor-pointer  text-hero-text  font-roboto ">Pricing</Link>
                        <Link href= "useCases" className="text-[20px]  font-normal cursor-pointer  text-hero-text  font-roboto ">Cases</Link>
                        <Link href= "faq" className="text-[20px] font-normal cursor-pointer text-hero-text font-roboto ">F.A.Q</Link>

                        <a href= "/">
                        <button className="px-[45px] hero-color flex flex-row justify-between mt-[20px] gap-[12px] py-[11px] rounded-[6px] items-center boxShadow1 cursor-pointer hover:opacity-[.94]">
                            <div className="font-bold color text-[16px] text-text-darkBlue1  ">Make a test </div>
                                <FileText size={40} strokeWidth={1.75} />
                            </button>
                        
                        </a>

        </ul>
        {isVisible && <button type="button" class="inline-flex items-center p-2 absolute right-0 top-0 w-10 h-10 mr-[25px] justify-center text-sm mt-[10px] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white-100 " aria-controls="navbar-default" onClick={() => setIsVisible(!isVisible)}  aria-expanded="false">
            <span class="sr-only">Close main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] h-[24px]' height="1em" viewBox="0 0 384 512"><path fill= "white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>
        }
    </div>
    
    

    </header>
  )

}

export default Header 



