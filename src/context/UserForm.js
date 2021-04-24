import React from 'react'


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
export const ContextVariable = React.createContext(initialState)

const UserForm = ({children}) => {
    return (
        <div>
            <ContextVariable.Provider value='' >
                {children}
            </ContextVariable.Provider>
        </div>
    )
}

export default UserForm
