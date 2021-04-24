import React,{useContext,useState} from 'react'
import FormUserDetails from '../components/FormUserDetails'
import FormPersonalDetails from '../components/FormPersonalDetails'
import Success from '../components/Success'
import Confirm from '../components/Confirm'

const initialState = {
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
    const [state,setState] = useState(initialState);
    const updateState = () => {
        setState(state.step = state.step + 1 )
    }
    return (
        <div>
            {console.log(state)}
            <ContextVariable.Provider value={{updateState}} >
                {returnComponent(initialState.step)} 
            </ContextVariable.Provider>
        </div>
    )
}

export default UserForm
