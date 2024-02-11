
import Image from "next/image"
import Link from "next/link"


export const Footer = () => {
    
    return (
          <footer className= "">
                  <div className="grid grid-cols-3 grid-rows-1 sm:grid-cols-4 pt-[45px] ">
                          <div className="">
  
                                <ul className="">
                                  <li className="flex align-middle">
                                      <Image src="/bookl.png" width={45} height={45} alt="ExamtestAI" className="w-[54px] h-[54px] rounded-[8px]"/>
                                      <h1 className="text-[23px] text-hero-text pl-[11px] font-black text-start pt-[10px] ">TestExamAI</h1>
                                  </li>
                                  <li className="">
                                      <p className="text-[14px] text-hero-text opacity-[.65] ml-[20px] ">Make tests for your exam right now </p>
                                  </li>
                                  <li className="text-[14px] mt-[8px] text-text-copyright ml-[20px]">
                                      Copyright © 2023 - All rights reserved
                                  </li>
                                </ul>
                          </div>
                          <div className="ml-[120px]">
                               <h4 className="text-[20px] text-hero-special-text1 font-light">Links</h4>
                               <ul className="mt-[11px] flex flex-col">
                                  <Link href= "#section-header" className="text-[16px] text-hero-text font-extralight opacity-[.88]  cursor-pointer ease-in duration-100 hover:opacity-[1] ">Main</Link>
                                  <Link href= "#section-examples" className="text-[16px] text-hero-text font-extralight opacity-[.88] mt-[11px] cursor-pointer ease-in duration-100 hover:opacity-[1] ">Examples</Link>
                                  <Link href= "#section-tutorial" className="text-[16px] text-hero-text font-extralight opacity-[.88] mt-[11px] cursor-pointer ease-in duration-100 hover:opacity-[1] ">Tutorial</Link>
                                  
  
                               </ul>
                          </div>
                          <div className="ml-[60px] ">
                              <h4 className= "text-[20px] text-hero-special-text1 font-light">Legal Terms</h4>
                              <ul className="mt-[11px] ">
                                  <li className="text-[16px] text-hero-text font-extralight opacity-[.88] mt-[11px] cursor-pointer ease-in duration-100 hover:opacity-[1]">Terms of services</li>
                                  <li className="text-[16px] text-hero-text font-extralight opacity-[.88] mt-[11px] cursor-pointer ease-in duration-100 hover:opacity-[1]">Private policy</li>
                              </ul>
                          </div>
                          <div className="">
                              <p className="text-[14px] text-hero-text opacity-[.65] font-light ml-[20px]">Made by <span className="text-[16px] opacity-[1] cursor-pointer "></span></p>
                          </div>
                  </div>
          </footer>
    )
  }
  
export default Footer 