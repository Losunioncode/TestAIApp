'use client'
import { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faWandMagicSparkles, faFileLines, faClock, faUsers, faGlobe, faBolt,faQuestion,  faUserCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faWandMagicSparkles, faFileLines, faClock, faUsers, faGlobe , faBolt, faQuestion, faUserCheck, faChevronDown)

const FAQItem = ({ question, answer }) => {
    const [isAnswerVisible, setAnswerVisible] = useState(false);
  
    const toggleAnswer = () => {
      setAnswerVisible(!isAnswerVisible);
    };
  
    return (
      <div className="mt-[11px]">
        
        <div className={`text-start w-[404px] flex item-center flex-col sm:w-[601px] rounded-[4px] pl-[25px] bg-darkBlue text-[12px] text-hero-text ${ isAnswerVisible ? "h-[145px] ease-in duration-200 " : "" } `} onClick={toggleAnswer}>
          
          <h4 className={`flex font-bold py-[12px] justify-between align-middle sm:text-[18px] text-center text-[16px] ${isAnswerVisible ? "text-hero-special-text1" : ""} cursor-pointer`}>
            {question}
            <FontAwesomeIcon icon="fa-solid fa-chevron-down " size="lg" style={{color: "rgba(254, 251, 226, 1)"}} className={`mr-[28px] ${isAnswerVisible ? "rotate-180 ease-in duration-200 " : ""}`}/>
  
          </h4>
          { isAnswerVisible && <div className="text-start w-full rounded-[11px] text-[16px] hero-text-hero ">{answer}</div>}
        </div>
     
      </div>
    );
  };
  
  const FaqBlock = () => {
    const faqData = [
        
      {
          
          question: "Do you store information from my pages? ",
          answer:
            
            " "
        },
        {
          question: "How does the payment process work?",
          answer:
            ""
        },
        {
          question: "What file types are alowed to use?",
          answer:
            ""
        },
        {
          question: "Is there a refund policy?",
          
          answer:
            ""
        },
        {
          question: "How many images I can send to my page?",
          answer:
            
            ""
        },
        {
          question: "Experiencing issues with the app? ",
          answer:
            
            ""
        }
      ];
  
      
      return (
        <div className="flex flex-col items-center gap-[40px]" id= "faq">
          <h1 className="text-[18px] font-bold font-roboto pt-[65px] text-hero-text">F.A.Q</h1>
          
          <p className= "text-hero-special-text1 text-[20px] font-bold text-center mt-[0px] opacity-[.88]">Most frequent questions</p>
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      );
    
    


}

export default FaqBlock