'use client'
import { useEffect } from "react"
import Link from "next/link"
import { useSession} from "next-auth/react"
import { NextResponse } from "next/server"
import ReactDom from 'next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.development';
import { renderToString } from 'react-dom/server';

import Example from "@/components/Example";


const page = () => {
  
    const { data: session } = useSession()

    return (      
        <div className="bg-darkBlue  h-[100vh]">
                <div className="flex items-center flex-col pt-[10rem] ">
                    <p className="mg-auto text-[24px] font-bold text-center text-hero-text">
                            The error has occured, Please try again 
                    </p>
                    {session ? (
                        <Link
                        href="/"
                        
                        className="sm:px-[45px] hero-color px-[25px] gap-[12px] mt-[45px] font-bold  py-[11px] rounded-[6px] cursor-pointer hover:opacity-[.94]"
                         >   
                                Home Page
                        </Link>
                    ):
                        <Link
                        href="/profile"
                        
                        className="sm:px-[45px] hero-color px-[25px] gap-[12px] mt-[45px] font-bold py-[11px] rounded-[6px] cursor-pointer hover:opacity-[.94]"
                        >   
                                Move to Profile
                        </Link>
                    }
                    
                </div>
        </div>
  )
}

export default page