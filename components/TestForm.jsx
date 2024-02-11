'use client'
import { useState, useContext} from "react"
import Link from "next/link";
import SubjectProcess from "./Process/SubjectProcess";
import TopicProcess from "./Process/TopicProcess";
import { Progress } from "./ui/progress";

import { useRouter } from "next/navigation";
import StructureProcess from "./Process/StructureProcess";
import ProcessContext from '@/app/(ProcessContext)/ProcessContext';





const TestForm = ({ handleSubmitForm, showTypeErrorMessage, loading }) => {
  const [process, dispatch] = useContext(ProcessContext)
  const [showTopicComponent, setShowTopicComponent] = useState(false)
  const [showErrorMessageSubject, setShowErrorMessageSubject] = useState('')
  const [showTypeComponent, setShowTypeComponent] = useState(false)
  const [showErrorMessageTopic, setShowErrorMessageTopic] = useState('')
  const [progressValue, setProgressValue] = useState(10)
  
  const router = useRouter()

  const handleSubjectSubmit = (e) => {
    const valueSubject = e.target.value    
    dispatch({
        type: 'setSubject',
        value: valueSubject
    })
  }
  
  const handleMoveComponent = () => {
      if(process.subject === ''){
          setShowErrorMessageSubject('Please choose the subject for your test.')
          return 
      }
      setShowTopicComponent(true)
      setProgressValue(45)
  
    }


  
  const handleMoveBackComponent = () => {
        setShowTopicComponent(false)
        setProgressValue(10)
  }

  const handleMoveBack1Component = () => {
        setShowTypeComponent(false)
        setShowTopicComponent(true)
        setProgressValue(45)
  }



  
  
  
  
  const handleTopicSubmit = (e) => {
    const valueTopic = e.target.value

    dispatch({
        type: 'setTopic',
        value: valueTopic
    
    })
  }

  const handleTypeSubmit = (e) => {
       const valueType = e.target.value
       dispatch({
           type: 'setType',
           value: valueType
       })
  
    }

  const handleAmountSubmit = (e) => {
      const valueAmount = e.target.value      
      dispatch({
           type: 'setAmount',
           value: valueAmount
      })
  }

  const handleMoveTopicComponent = () => {
      if (process.topic === '' || process.amount === 0){
            setShowErrorMessageTopic('Please fill the form for topic and amount fields')
            return
      }
      setShowTopicComponent(false)
      setShowTypeComponent(true)
      setProgressValue(81)
  
    }

  console.log(process)
  return (

        <section className="bg-darkBlue">
          <div className="min-h-[1680px] sm:pl-[160px] md:min-h-[100vh] flex flex-col items-center sm:block container"> 
               
               <div className="pt-[45px] ">
                   <button onClick={() => router.push("/profile") } className="px-[45px] hero-color gap-[12px] sm:right-[45rem] py-[11px] rounded-[6px] font-bold  cursor-pointer hover:opacity-[.94]">Move to your profile</button>
               </div>

                <Progress value={progressValue} className="mt-[45px] w-[80%] sm:w-1/2"/>
                        
                        <div className="">
                             {  !showTopicComponent && !showTypeComponent ? 
                                <SubjectProcess 
                                          handleSubjectSubmit= {handleSubjectSubmit} 
                                          handleMoveComponent={handleMoveComponent}
                                          showErrorMessageSubject= {showErrorMessageSubject}
                                
                                />
                                : ''
                             }
                             { showTopicComponent ? 
                                  <TopicProcess 
                                        handleTopicSubmit = {handleTopicSubmit}
                                        value = {process.topic}
                                        valueAmount = {process.amount}
                                        handleAmountSubmit= {handleAmountSubmit}
                                        handleMoveTopicComponent={handleMoveTopicComponent}
                                        handleMoveBackComponent={handleMoveBackComponent}
                                        handleMoveBack1Component={handleMoveBack1Component}
                                        showErrorMessageTopic = {showErrorMessageTopic}
                                  />
                                  : ''
                             }
                            { showTypeComponent ? 
                                <StructureProcess 
                                    handleTypeSubmit={handleTypeSubmit} 
                                    handleSubmitTest= {handleSubmitForm}
                                    showTypeErrorMessage= {showTypeErrorMessage}
                                    handleMoveBack1Component={handleMoveBack1Component}
                                    loading= {loading}

                                />
                                : ''
                            }
                           
                        </div>
                       {/* <TopicProcess topic={props.topic} handleInputTopic={props.handleInputTopic} handleInputAmount={props.handleInputAmount}/>
                       <StructureProcess handleInputType={props.handleInputType}/> */}
               
              
               
          </div>
         
        </section>
    )
}

export default TestForm