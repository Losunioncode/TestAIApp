'use client'
import { exampleTest1 , bolt1, editL, printer1, exampleTest3, exampleTest4, book1 } from '@/public/images'
import { useState, useEffect  } from 'react'
import Image from 'next/image'


const Example = () => {

  const pdfTests = [ exampleTest3, exampleTest1, exampleTest4 ]

  const subjectTests = ['Math', 'Geography', 'Physics']
  
  const image = '@/images/book1.png'
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentIndex1, setCurrentIndex1] = useState(0)

  const changeExample = () => {
        setCurrentIndex1((currentIndex1) => (currentIndex1 + 1) % pdfTests.length);
  }
  useEffect(() => {
    //   console.log(image)
      const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % pdfTests.length);
    
    }, 2600); // Change image every 3000 milliseconds (3 seconds)
    return () => clearInterval(interval);
  

   }, []);

  return (
       
        <section id="section-examples" className="flex justify-center pt-[45px] ">
            
            <div className="flex flex-col">
                <h1 className="text-hero-text text-center text-[18px] font-bold ">Let's make your test</h1>
                <p className="text-hero-special-text1 font-bold text-[20px] pt-[25px] text-center  opacity-[1]">See tests examples </p>
                <div className="flex flex-col mt-[45px] sm:flex-row justify-center items-center ">
                        <div className="flex flex-col sm:mt-[11px] mt-[10px] ">
                            
                            <div className="flex flex-row">
                                <Image src={ bolt1 } alt="" className="w-[61px] h-[61px]" />
                                <div className="flex flex-col">
                                        <h4 className="ml-[16px] font-bold text-[#E0E0E0] text-[18px] hero-text-shadow ">Smart questions from AI</h4>
                                        <p className= "text-hero-text text-[16px] mt-[8px] ml-[25px] hero-text-shadow  w-[288px] sm:w-[328px] font-light hero-text-shadow ">AI system will generate tough questions based on your topic. Just choose your topic. </p>
                                </div>
        
                            </div>
                            <div className="mt-[25px] flex flex-row ">
                                <Image src={ editL } alt="" className="w-[61px] h-[61px]" />
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-[#E0E0E0] text-[18px]  ml-[16px] hero-text-shadow ">Create as you like </h4>
                                    <ul className="ml-[25px] mt-[8px]  ">
                                        <li className="text-hero-text text-[16px]  font-light ">- Edit as you like!</li>
                                        <li className="text-hero-text text-[16px]  font-light">- Chose type of the test </li>
                                        <li className="text-hero-text text-[16px]  font-light ">- Make your design</li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className="mt-[45px] flex flex-row ">
                                <Image src={ book1 } alt="" className="w-[61px] h-[61px]" />
                                <div className="flex flex-col">  
                                    <h4 className= "font-bold text-[#E0E0E0] text-[18px] ml-[16px] hero-text-shadow " >Select your subject ! </h4>
                                    <p className= "text-hero-text text-[16px] mt-[8px] font-light  ml-[25px] w-[288px] sm:w-[328px] ">Select your subject! Make sure all questions will be generated based on your topic. </p>
                                </div>
                            </div>
                            <div className="mt-[45px] flex flex-row ">
                                <Image src={ printer1 } alt="" className="w-[61px] h-[61px]" />
                                <div className="flex flex-col">  
                                    <h4 className= "font-bold text-[#E0E0E0] text-[18px]  ml-[16px] hero-text-shadow " >Print and use your test </h4>
                                    <p className= "text-hero-text text-[16px] mt-[8px]  font-light  ml-[25px] w-[288px] sm:w-[328px] hero-text-shadow ">After you’ve done your test , upload it to PDF and use as you want ! </p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block mt-[16px] ml-[225px]  ">
                                <div className="w-[205px] h-[46px] hero-color flex flex-row justify-center transition-transform duration-700 text-[18px] hero-text-shadow font-bold rounded-[4px] ml-[101px] items-center cursor-pointer hover:opacity-[.94]">
                                     {subjectTests[currentIndex]}
                                </div>
                            <div className="w-[406px] h-[625px] overflow-hidden  ">
                                    <div className="flex transition-transform duration-700 " style={{ transform: `translateX(${-currentIndex * 100}%)` }} >
                                        {/* {/* <img src={exampleTest1} alt="" className="w-[406px] h-[465px] mt-[45px]  " /> */}
                                        {/* <img src={exampleTest3} alt="" className=" " />
                                        <img src={exampleTest4} alt="" className="w-[406px] h-[465px] mt-[45px] rounded-[6px] " />  */}
                                        
                                        { pdfTests.map((test, index) => (
                                            <Image src= { test } alt="pdfTest" key= {index} className="w-full h-full mt-[45px] object-cover  border-[2px] boxShadow1 rounded-[3px] border-hero-special-text" />
                                            
                                        ))}

                                        
                                    </div>
                                    <div className=" ml-[165px] mt-[65px] transform flex space-x-2  ">
                                                { pdfTests.map((_, index) => (
                                                    <div 
                                                        key={index}
                                                        className={`w-2 h-2 rounded-full bg-white ${currentIndex === index ? "opacity-100" : "opacity-50"} cursor-pointer `}
                                                        onClick={() => setCurrentIndex(index)}
                                                    ></div>
                                                ))}
                                    </div>
                            </div>
                            
                            
                        </div>

                        <div className="sm:hidden mt-[45px] ">
                                <h3 className="text-hero-text text-center text-[18px] font-bold">Examples of AI generated tests</h3>
                                <div className="w-[368px] overflow-hidden ">
                                        <div className="flex transition-transform duration-700 " style={{ transform: `translateX(${-currentIndex1 * 100}%)` }}>
                                                { pdfTests.map((test, index) => (
                                                                    <Image src= { test } alt="pdfTest" key={ index } className="w-full h-full mt-[45px] object-cover border-[2px] boxShadow1 rounded-[3px] border-hero-special-text" />
                                                                    
                                                ))}
                                        </div>
                                </div>

                                <div className=" ml-[165px] mt-[25px] transform flex space-x-2  ">
                                                { pdfTests.map((_, index) => (
                                                    <div 
                                                        key={index}
                                                        className={`w-2 h-2 rounded-full bg-white ${currentIndex1 === index ? "opacity-100" : "opacity-50"} cursor-pointer `}
                                                        onClick={() => setCurrentIndex1(index)}
                                                    ></div>
                                                ))}
                                </div>
                                
                                
                        </div>
                        
                       
                </div>
                
            </div>

        </section>
  )
}








export default Example