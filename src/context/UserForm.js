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
        setState(prevState => ({...prevState,step: prevState.step + 1 }))
    }
    const updateBackState = () => {
        setState(prevState => ({...prevState,step:prevState.step - 1}))
    }
    const updateUserValues  = (details) => {
       setState(prevState => ({...prevState,values:{...prevState.values,fName:details.fName,lName:details.lName,email:details.email}}))
    }
    const updatePersonalValues  = (details) => {
        setState(prevState => ({...prevState,values:{...prevState.values,age:details.age,sex:details.sex,university:details.university,major:details.major,address:details.address}}))
    }
    return (
        <div>
            <ContextVariable.Provider value={{updateContinueState,updateBackState,updateUserValues,updatePersonalValues,state}} >
                {console.log(state)}
                {returnComponent(state.step)}
            </ContextVariable.Provider>
        </div>
    )
}

export default UserForm
