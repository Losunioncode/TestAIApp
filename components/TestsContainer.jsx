import { useState } from 'react';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import SkeletonPDFCard from './SkeletonPDFCard';

import { X } from 'lucide-react';



const TestsContainer = ({ TestPDFArray, handleReceiveSomeTests,  handleRemoveBlockShow, handleConfirmRemoveTests, handleCancelRemoveShow, stateTests, loading, removeBlockShow }) => {

         
         
        
        
        return (
                <div className="h-[100vh] sm:h-full">
                        <div className="">
                                { removeBlockShow ? <p className="text-[16px] font-bold sm:text-[23px] ml-[12px] text-hero-text sm:ml-0 ">Please select tests that you'd like to delete</p> : ''}
                                <button onClick= {!removeBlockShow ? handleRemoveBlockShow : handleConfirmRemoveTests} className={`px-[45px] hero-color gap-[12px] ${!TestPDFArray.length > 0 ? "hidden" : "" } sm:right-[45rem] ml-[11px] py-[11px] my-[25px] rounded-[6px] sm:mt-[45px] font-bold  cursor-pointer sm:ml-0 hover:opacity-[.94] `}>
                                        
                                        {
                                                !removeBlockShow ? 
                                                "Delete items" 
                                                : 
                                                "Confirm"
                                         }
                                        </button>
                                
                                {
                                        removeBlockShow ? <button onClick={handleCancelRemoveShow} className="px-[45px] hero-color gap-[12px] sm:right-[45rem] py-[11px] ml-[11px] rounded-[6px] font-bold  cursor-pointer hover:opacity-[.94]">Cancel</button> 
                                :
                                ""
                                }
                        </div>
                        <div className="flex flex-row flex-wrap gap-[40px] ml-[11px] md:mt-[3rem] items-start sm:ml-0 mt-[88px] sm:mt-[45px] justify-start ">
                                
                                { TestPDFArray.map((item, i) => (        
                                        <div key= {i} className="">  
                                                <div className={` cursor-pointer`}>
                                                     <div className="bg-darkBrightBlue w-[145px] h-[143px] flex items-center justify-center rounded-[8px]">
                                                                { 
                                                                        !removeBlockShow ?
                                                                                <div className="">
                                                                                        { loading ? 
                                                                                                <div className="">
                                                                                                        <SkeletonPDFCard />
                                                                                                </div>
                                                                                                
                                                                                           : 
                                                                                                <Link  href={`/TestPDF/${item.id}`} className="flex hover:opacity-[.88] p-[25px] flex-col justify-center gap-[10px] items-center ">  
                                                                                                        <FileText size={61} color="white"/>
                                                                                                        <p className="mt-[6px] text-[16px] font-bold text-white">{item.title.slice(0,8)} </p> 
                                                                                                </Link> 
                                                                                             
                                                                                        } 
                                                                                                
                                                                                </div>
                                                                                
                                                                                        : 
                                                                                        <div className="">
                                                                                                <input onChange= {handleReceiveSomeTests} type="radio" id={item.id} value={item.id} className="peer hidden" />
                                                                                                <label htmlFor={item.id} className="flex flex-col p-[25px] items-center hover:opacity-[.88] peer-checked:opacity-[.25] gap-[10px] cursor-pointer">
                                                                                                        < X strokeWidth={2} size={61} color='white' className= ""/>
                                                                                                        <p className="text-[16px] font-bold text-white">{item.title.slice(0,8)} </p> 
                                                                                                </label>
                                                                                        </div>     
                                                                 } 
                                                        </div>
                                                </div>                     
                                        </div>            
                                ))}
                        </div>
                </div>
                
               
  )
}

export default TestsContainer