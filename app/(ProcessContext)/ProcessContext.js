import { createContext, useContext, useReducer } from "react";


const processReducer = (state = initialState, action) => {
    switch(action.type){
        case "setSubject":
            return {...state, subject: action.value}
        case "setTopic":
            return {...state, topic: action.value}
        case "setAmount":
            return {...state, amount: action.value}
        case "setType":
            return {...state, type: action.value}
        

        case "setStateDefault": 
            return initialState

        default: 
            console.log(`The action ${action.type} is not supported`)
    }
}





const ProcessContext = createContext()





export const ProcessContextProvider = (props) => {

        const [process, processDispatch] = useReducer(processReducer, initialState)
                
        return (
            <ProcessContext.Provider value={[process, processDispatch]}>
                {props.children}
            </ProcessContext.Provider>     
        )
}



export default ProcessContext

const initialState = {
    subject:'',
    topic: '',
    amount: 0,
    type: ''
}