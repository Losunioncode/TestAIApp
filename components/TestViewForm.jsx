import React, {useRef} from 'react'
import { useReactToPrint } from 'react-to-print'



export const TestViewForm = React.forwardRef((props, ref)  => {

    const preparedText = props.testPDFQuestions[0]
    console.log(preparedText)
  
    return (
            <div ref= {ref} className="max-w-5xl mx-auto p-20 border bg-white border-gray-200 shadow-md py-[45px] ">
                <div className="">
                    <h1 className="text-center text-lg  text-gray-800 border-b-2 border-gray-200 pb-[20px] italic">{props.testPDFTitle}</h1>
                </div>
                    { props.testPDFQuestions.map((item, i) => (
                        <div key= {i} className="">
                                <div className="mb-5">
                                        <p className="text-center text-lg  text-gray-800 border-b-2 border-gray-200 pb-2 italic mt-[70px] ">{item.question[0]}</p>
                                        <ul className="mt-1 space-y-1">
                                        {item.possibleAnswers.map((answer, index) => (
                                            <li key={index} className="p-2 border border-gray-200 rounded hover:bg-gray-100 cursor-pointer">{answer}</li>
                                        ))}
                                        </ul>
                                </div>
                        </div>
                    ))}
        </div>
  )

})
