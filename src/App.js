import UserForm,{ContextVariable} from './context/UserForm'
import FormUserDetails from  './components/FormUserDetails'
import React, {useContext} from 'react'

function App() {
  const state = useContext(ContextVariable);

  return (
    <div className="App">
       {console.log(state)}
        <UserForm>
            <FormUserDetails/>
        </UserForm>
    </div>
  );
}

export default App;
