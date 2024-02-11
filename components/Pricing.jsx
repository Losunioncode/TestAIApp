import { Wand2, Check, FileText } from "lucide-react"


const Pricing = () => {
    return (
          <section className="flex flex-col justify-center items-center text-center   ">
                  <div className="pt-[65px] ">
                          <h6 className= "text-hero-text font-bold text-[18px] hero-text-shadow ">Pricing</h6>
                          <p className= "text-hero-special-text1 font-bold text-[20px] mt-[45px] opacity-[1] hero-text-shadow ">Purchase MakeExamTestAI here !</p>
                  
                  </div>
                  
                  <div className=" w-1/2 flex flex-col p-[25px] hero-color items-center justify-center mt-[45px] rounded-[6px] ">
                      
                      <h4 className="text-darkBlue text-center font-black text-[21.8px] mt-[25px]  ">Standart edition </h4>
                      <p className="text-darkBlue text-center text-[16px]">Purchase the MakeAITest here</p>
                      <div className="w-full h-[65px] bg-darkBrightBlue mt-[25px] flex items-center justify-center ">
  
                           <span className="font-bold text-[25px] text-[#FFFDE8] ml-[45px] text-center line-through opacity-[.60] ">$28.99</span>
                           <span className="text-[45px] text-hero-text ml-[23px] font-black text-center ">$21.99</span>
                           <span className= "text-[16px] text-hero-text mt-[28px] font-black text-center ml-[8px] ">USD</span>
                      
                      </div>
                      <ul className=" flex items-center flex-col align-center mt-[60px] ">
                          <li className= "flex align-middle items-center ">
                              <Check className="mr-[6px] " strokeWidth={3}/>
                              <p className="font-bold text-[18px] ml-[10px] ">Limitless usage</p> 
                          </li>
                          <li className=" mt-[8px] flex align-middle ">
                              <Check className="mr-[6px] " strokeWidth={3}/>

                              <p className="font-bold text-[18px] ml-[10px] ">Any topic that you wish!</p> 
                          </li>
                          <li className="mt-[8px] flex align-middle ">
                              <Check className=" mr-[6px] " strokeWidth={3}/>

                              <p className="font-bold text-[18px] ml-[10px] ">Diffirent structure of your test</p> 
                          </li>
                          <li className=" mt-[8px] flex align-middle ">
                             <Check className=" mr-[6px] " strokeWidth={3}/>
                              <p className="font-bold text-[18px] ml-[10px] ">One time payment!</p> 
                          </li>
                          <li className="mt-[8px] flex align-middle ">
                              <Check className=" mr-[6px] " strokeWidth={3}/>
                              <p className="font-bold text-[18px] ml-[10px] ">Edit your tests</p> 
                          </li>
                      </ul>
  
                      <div className="w-1/2 bg-darkBrightBlue py-[3px] rounded-[6px] mt-[65px] ">
                          <p className="text-[18px] text-center font-bold mt-[0px] text-hero-text ">One time payment!</p>
                      </div>
                      
                      <button className="w-[205px] h-[46px] mt-[45px] bg-darkBrightBlue flex flex-row justify-center rounded-[6px] items-center cursor-pointer hover:opacity-[.94]">
                              <div className="font-bold color text-[16px] text-hero-text  ">Purchase </div>
                              <FileText className=" text-hero-text ml-[6px]" strokeWidth={2}/>

  
                      </button>
                  </div>
          </section>
    )
  }

export default Pricing