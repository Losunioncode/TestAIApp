import { FileText } from 'lucide-react'
import Image from 'next/image'
import { RotateCw, ChevronLeft} from 'lucide-react';


const StructureProcess = ({ handleTypeSubmit, handleSubmitTest, handleMoveBack1Component, showTypeErrorMessage, loading}) => {
  return (
        
        <section>
                  
                            { showTypeErrorMessage && (
                                                <div className="mt-[45px]">
                                                    <p className="text-[16px] text-white font-bold">{showTypeErrorMessage}</p>  
                                                </div>
                            )}
                    <div className="flex flex-col items-center sm:flex-row ">    
                            <button onClick={handleMoveBack1Component} className="px-[11px] py-[12px] mt-[25px] bg-darkBrightBlue rounded-[8px] ">
                                <ChevronLeft color="#fefbe2" strokeWidth={3} className=""/>
                            </button>
                          
                          <div className="mt-[45px] sm:ml-[45px] ">
                              <h4 className="text-hero-text text-[20px] text-center sm:text-left ">Type of the text</h4>
                              <p className="text-hero-text text-[16px] font-light opacity-[.65] text-center sm:text-left mt-[11px]" required > Choose the structure of your test</p>
                          </div>
                      </div>
                     <div className="sm:ml-[88px]">
                            <div className="mt-[65px] flex flex-col sm:flex-row gap-[10px] sm:gap-[45px] ">
                                <div className="flex flex-col items-center ">
                                            <div className="border rounded-[6px]">
                                                    <div className="mb-5 px-[54px] py-[36px] ">
                                                              <p className="text-[20px] font-bold text-center text-hero-text ">
                                                                    A. answer...
                                                              </p>
                                                              <p className="text-[20px] font-bold text-hero-text ">
                                                                    B. answer...
                                                              </p>
                                                              <p className="text-[20px] font-bold text-hero-text ">
                                                                    C. answer...
                                                              </p>
                                                            
                                                    </div>
                                            </div>
                                            <input type="radio" name="option" id="1" value="3" className="peer hidden" 
                                            onChange={handleTypeSubmit}
                                            />
                                        
                                            <label htmlFor="1" 
                                                   className="block cursor-pointer select-none rounded-[4px]
                                                              px-[45px] mt-[25px] text-center text-slate-200 
                                                              py-[10px] bg-darkBrightBlue peer-checked:bg-darkBrightBlue/[.65] 
                                                              peer-checked:font-bold peer-checked:bg-hero-color peer-checked:text-hero-text"
                                                    
                                                    > 
                                                    1
                                            </label>
                                </div>
                                <div className="flex flex-col items-center mt-[45px] sm:mt-0">
                                        
                                            <div className="border rounded-[6px] ">
                                                    <div className="mb-5 px-[50px] py-[66px] ">
                                                              <p className="text-[20px] font-bold text-hero-text ">
                                                                    True & False  
                                                              </p>
                                                    </div>
                                            </div>
                                        <input type="radio" name="option" id="2" value="True&False" className="peer hidden" 
                                                onChange={handleTypeSubmit}
                                         />
                                        <label htmlFor="2" className="block cursor-pointer select-none rounded-[4px] px-[45px] mt-[25px] text-center text-slate-200 py-[10px] bg-darkBrightBlue peer-checked:bg-darkBrightBlue/[.65] peer-checked:font-bold peer-checked:text-hero-text">
                                            2
                                        </label>
                                </div>
                            </div>
                            
                            <div className="flex justify-center sm:block">
                                
                                <button onClick={handleSubmitTest} type="submit" className="w-[205px] h-[46px] sm:mt-[88px] hero-color my-[88px] flex flex-row justify-center rounded-[6px] items-center cursor-pointer hover:opacity-[.94]">
                                    <div className="font-bold color text-[16px] text-text-darkBlue1 "> Make the test </div>
                                    { !loading ? <FileText size={26} className="ml-[11px]" /> : <RotateCw className="ml-[10px] h-6 w-6 animate-spin" /> }
                                    
                                </button>
                            </div>
                     </div>
                      
                      
        </section>
  )
}

export default StructureProcess