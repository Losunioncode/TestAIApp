import { useContext, useState } from 'react';
import { Calculator, Atom, TestTube2, Landmark, Languages, SquareDashedBottomCode, DraftingCompass, Grip,  MountainSnow,BookOpenText, PersonStanding, Bird, MoveRight } from 'lucide-react';


const SubjectProcess = ({ handleSubjectSubmit, handleMoveComponent, showErrorMessageSubject}) => {
    
    const [otherActive, setOtherActive] = useState(false)
    
    
    return (
        <section>
                <div className="">
                    { showErrorMessageSubject && (
                                    <div className="mt-[45px]">
                                        <p className="text-[16px] text-white font-bold">{showErrorMessageSubject}</p>  
                                    </div>
                    )}
                    <div className="mt-[45px] ">
                                <h4 className="text-hero-text text-[20px] text-center sm:text-left "> Select a subject for the test </h4>
                                <p className="text-hero-text text-[16px] font-light opacity-[.65] text-center sm:text-left mt-[11px]">Please provide a subject to make your test</p>
                    </div>
                    <div className= "mt-[65px] grid gap-[11px]  max-w-[810px] justify-center items-center grid-cols-2 sm:grid-cols-6">
                              <div className="">
                                  <input type="radio" name="option" id="algebra" value="algebra" className="peer hidden " onChange={handleSubjectSubmit}/>
                                  <label htmlFor= "algebra" className={`bg-darkBrightBlue flex flex-col h-[111px] hover:bg-darkBrightBlue/[.65] peer-checked:border-2 justify-center items-center rounded-[4px] hover:cursor-pointer`} 
                                  
                                    onClick={() => {
                                        setOtherActive(false)
                                    }}
                                  >
                                      <Calculator size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px] ">Algebra</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="physics" value="physics" className="peer hidden" onChange={handleSubjectSubmit}/>
                                  <label htmlFor="physics" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2  hover:bg-darkBrightBlue/[.65] justify-center items-center rounded-[4px] hover:cursor-pointer"
                                    onClick={() => {
                                        setOtherActive(false)
                                    }}
                                  >
                                      <Atom size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px]">Physics</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="chemistry" value="chemistry" className="peer hidden" onChange={handleSubjectSubmit}/>
                                  <label htmlFor= "chemistry" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65]  justify-center items-center rounded-[4px] hover:cursor-pointer "
                                    onClick={() => {
                                            setOtherActive(false)
                                    }}
                                  >
                                      <TestTube2 size={48} color="#ffffff" />                                     
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px] ">Chemistry</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="history" value="history" className="peer hidden " onChange={handleSubjectSubmit}/>
                                  <label htmlFor= "history" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65]  justify-center items-center rounded-[4px] hover:cursor-pointer "
                                    onClick={() => {
                                        setOtherActive(false)
                                    }}
                                  >
                                      <Landmark size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px] ">History</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="english" value="english" className="peer hidden " onChange={handleSubjectSubmit} />
                                  <label htmlFor= "english" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65] justify-center items-center rounded-[4px] hover:cursor-pointer " 
                                        onClick={() => {
                                            setOtherActive(false)
                                        }}
                                  >
                                      <Languages size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px]">English</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="I.T" value="I.T" className="peer hidden" onChange={handleSubjectSubmit} />
                                  <label htmlFor= "I.T" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65] justify-center items-center rounded-[4px] hover:cursor-pointer " 
                                    onClick={() => {
                                        setOtherActive(false)
                                    }}
                                  >
                                      <SquareDashedBottomCode size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px] ">I.T</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="geometry" value="geometry" className="peer hidden " onChange={handleSubjectSubmit} />
                                  <label htmlFor= "geometry" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65] justify-center items-center rounded-[4px] hover:cursor-pointer "
                                    onClick={() => {
                                        setOtherActive(false)
                                    }}
                                  >
                                      <DraftingCompass size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px]">Geometry</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="biology" value="biology" className="peer hidden " onChange={handleSubjectSubmit} />
                                  <label htmlFor= "biology" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65]  justify-center items-center rounded-[4px] hover:cursor-pointer "
                                        onClick={() => {
                                            setOtherActive(false)
                                        }}
                                  >
                                      <Bird size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px]">Biology</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="geography" value="geography" className="peer hidden " onChange={handleSubjectSubmit} />
                                  <label htmlFor= "geography" className="bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65]  justify-center items-center rounded-[4px] hover:cursor-pointer " 
                                        onClick={() => {
                                            setOtherActive(false)
                                        }}
                                  >
                                      <MountainSnow size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px]  "> Geography </span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="literature" value="literature" className="peer hidden "onChange={handleSubjectSubmit} />
                                  <label htmlFor= "literature" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65] justify-center items-center rounded-[4px] hover:cursor-pointer " 
                                        onClick={() => {
                                            setOtherActive(false)
                                        }}
                                  >
                                      <BookOpenText size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px]" >Literature</span>
                                  </label>
                              </div>
                              <div className="">
                                  <input type="radio" name="option" id="rights" value="human rights" className="peer hidden " onChange={handleSubjectSubmit}/>
                                  <label htmlFor= "rights" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65] justify-center items-center rounded-[4px] hover:cursor-pointer "

                                        onClick={() => {
                                        setOtherActive(false)
                                    }}
                                  >
                                      <PersonStanding size={48} color="#ffffff" />
                                      <span className="text-[#D8D7D7] font-bold text-[14px] pt-[16px]  ">Human Rights </span>
                                  </label>
                              </div>
                              <div className="">
                                  <input  type="radio" name="option" id="other" value="1" className="peer hidden " />
                                  <label htmlFor= "other" className=" bg-darkBrightBlue flex flex-col h-[111px] peer-checked:border-2 hover:bg-darkBrightBlue/[.65] justify-center items-center rounded-[4px] hover:cursor-pointer " 
                                      onClick= {() => {
                                         setOtherActive(true)
                                      }} > 
                                        <Grip size={48} color="#ffffff" />
                                        <span className="text-[#D8D7D7] font-bold text-[14px] pt-[10px]">Other</span>
                                  
                                  </label>
                              </div>
                             
                            </div>
                      </div>
                      { otherActive ? ( 
                          <div className="">
                              <p className="text-hero-text text-[16px] font-light text-center sm:text-left opacity-[.65] mt-[25px]"> Write your subject, please </p>
                              <input type="text"  
                                     placeholder= "subject..." 
                                     className="mt-[10px] p-2.5  focus:border-hero-text w-[29rem] rounded-[4px] focus:outline-none align-center text-hero-text bg-darkBrightBlue" 
                                     onChange={handleSubjectSubmit}
                                      
                                />
                         </div>
                           ) : ''}
                      <div className="">
                              <button onClick={handleMoveComponent} className= "w-[205px] h-[46px] sm:mt-[65px] flex items-center hero-color my-[88px] justify-center  rounded-[6px] font-bold cursor-pointer hover:opacity-[.94]">
                                    Continue
                                    <MoveRight size={26} strokeWidth={2} className="ml-[10px] "/>
                              </button>
                      </div>
                    
       
       
        </section>
  )
}

export default SubjectProcess