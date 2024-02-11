"use client";
import React from "react";
import { FileText } from "lucide-react"
// Base styles for media player and provider (~400B).
import ExampleVideoPlayer from "./example/ExampleVideoPlayer";




const Cases = () => {
  
  return (
    
    
    
    <section id="section-tutorial" className="mx-auto flex justify-center  flex-col items-center">
                   
        <div className="mt-[45px]">
                <h1 className="text-hero-text font-bold text-center text-[18px] hero-text-shadow ">Tutorial</h1>
                <p className="text-hero-special-text1 font-bold text-[20px] mt-[45px] opacity-[1] hero-text-shadow">Watch quick demo of TestExamAI </p>
        </div>
        <div className="">
                <ExampleVideoPlayer />
        </div>
        <button className="w-[205px] h-[46px] my-[125px] hero-color flex flex-row justify-center rounded-[6px] boxShadow1 items-center cursor-pointer hover:opacity-[.94]">
                    <div className="font-bold color text-[16px] text-text-darkBlue1 ">Make a test </div>
                    <FileText size={26} className="ml-[6px] " />

        </button>
    </section>
     
  )

}



export default Cases