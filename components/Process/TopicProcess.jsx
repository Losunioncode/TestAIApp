import React from 'react'
import Image from "next/image";
import {  FileText, MoveRight, ChevronLeft } from 'lucide-react';

const TopicProcess = ({ handleTopicSubmit, value, handleAmountSubmit, valueAmount, handleMoveTopicComponent, handleMoveBackComponent, showErrorMessageTopic}) => {

    
  return (
        <section className="h-[65vh]">
                 <div className="mt-[25px]">
                    { showErrorMessageTopic && (
                                    <div className="mt-[65px]">
                                        <p className="text-[16px] text-white font-bold">{showErrorMessageTopic}</p>  
                                    </div>
                    )}
                            
                            <div className="mt-[45px] flex flex-col sm:flex-row ">
                                <div className="">
                                    <button onClick={handleMoveBackComponent} className="px-[11px] py-[12px] mt-[25px] bg-darkBrightBlue rounded-[8px] ">
                                    <ChevronLeft color="#fefbe2" strokeWidth={3} className=""/>
                                    
                                    </button>
                                </div>
                                <div className="sm:ml-[45px] mt-[25px] ">
                                        <h4 className="text-hero-text text-[20px] text-start sm:text-[24px] sm:font-bold sm:text-left ">Topic of your subject </h4>
                                        <p className="text-hero-text text-[16px] font-light opacity-[.65] text-start sm:text-left mt-[11px]">Please provide a topic for a subject you’ve selected</p>
                                </div>
        
                            </div>

                            <div className="flex flex-col sm:block items-center sm:ml-[6rem]">
                                <textarea type="text"  
                                        placeholder= "write your topic here" 
                                        className="mt-[40px] p-2.5 focus:border-hero-text rounded-[4px] w-full sm:w-1/2 focus:outline-none align-center text-hero-text bg-darkBrightBlue"
                                        value= {value}
                                        onChange={handleTopicSubmit}
                                        required
                                    />
                                    <div className="mt-[29px] flex flex-col items-start sm:block">
                                        <p className="text-hero-text text-[16px] font-light opacity-[.65] mt-[16px] text-center sm:text-left sm:mt-[11px]" >How many questions do you want to have ? </p>
                
                                        <input type="number"  placeholder= "1" min= "1" value={valueAmount} className="sm:mt-[10px] p-2.5 focus:border-hero-text mt-[45px] w-[4rem] rounded-[4px] focus:outline-none align-center text-hero-text bg-darkBrightBlue"
                                            onChange={handleAmountSubmit}
                                        required/>
                                    </div>
                                    <button 
                                            onClick={handleMoveTopicComponent}
                                            className="hero-color sm:w-[205px] px-[45px] flex font-bold py-[11px]  items-center ml-[0px] text-center justify-center rounded-[6px] mt-[45px] cursor-pointer hover:opacity-[.94]"
                                    >
                                        Continue
                                        <MoveRight size={26} strokeWidth={2} className="ml-[10px] "/>
                                    </button>
                             </div>
                            
                        </div>
                        

                    
        </section>
   
  )
}



export default TopicProcess