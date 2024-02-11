import Hero from "@/components/Hero"
import Header from "@/components/layouts/Header"
import Example from "@/components/Example"
import Cases from "@/components/Cases"
import Pricing from "@/components/Pricing"
import FaqBlock from "@/components/FaqBlock"

import Footer from "@/components/layouts/Footer"



const page = () => {

    return (
        <div className=" ">
            <div className="bg-darkBrightBlue">
                <div className="container sm:h-[899px] h-[811px] p-0  ">
                    <Header />
                    <Hero />
                </div>
            </div>
            <div className="bg-darkBlue">
            <div className="container sm:h-[1065px]  ">
                    
                    <Example />
            </div>
            </div>
            <div className="bg-darkBrightBlue">
                <div className="container">
                        <Cases /> 
                </div>
            </div>
            {/* <div className="bg-darkBlue">
                <div className="container h-[1026px] ">
                        <Pricing />
                </div>
            </div> */}
            {/* <div className="bg-darkBrightBlue">
                <div className="container h-[1026px] ">
                        <FaqBlock /> 
                </div>
            </div> */}

            <div className="bg-darkBlue">
                <div className="container h-[465px] ">
                        <Footer /> 
                
                </div>
            </div>
     </div>

     )

}








export default page