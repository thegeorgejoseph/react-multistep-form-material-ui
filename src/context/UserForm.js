import React,{useContext,useState} from 'react'
import FormUserDetails from '../components/FormUserDetails'
import FormPersonalDetails from '../components/FormPersonalDetails'
import Success from '../components/Success'
import Confirm from '../components/Confirm'

var initialState = {
        step : 1,
        values : {
            fName : '',
            lName : '',
            email : '',
            age : '',
            sex : '',
            university: '',
            major: '',
            address: ''
        }
}

const ContextVariable = React.createContext()

export const useVariable = () => {
    return useContext(ContextVariable);
}

const returnComponent = (step) => {
    switch(step){
      case 1 :
        return <FormUserDetails/>
      case 2: 
        return <FormPersonalDetails/> 
      case 3:
        return <Confirm/>  
      case 4: 
        return <Success/>
  
      default:
        return <FormUserDetails/>
    }
  }


const UserForm = () => {
    var [state,setState] = useState(initialState);
    
    const updateContinueState = () => {
        setState({...state,step: state.step + 1})
    }
    const updateBackState = () => {
        setState({...state,step:state.step -1})
    }
    const updateValues  = (details) => {
        setState({...state,values:details})
    }
    return (
        <div>
            <ContextVariable.Provider value={{updateContinueState,updateBackState,updateValues}} >
                {console.log(state.step)}
                {returnComponent(state.step)}
            </ContextVariable.Provider>
        </div>
    )
}

export default UserForm
