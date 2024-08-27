import { useState } from 'react';
import './App.css'
import Form from './components/Form';



function App() {
  const [value, setValue] = useState("chAHCO")

  // onFormChange(data=>{})

  const submit = ({ data }, resetFunction) => {
    console.log(data);
    if (true) {
      resetFunction()
    }
  }

  return (
    <div>
      <Form
        controlled
        onSubmit={submit}
      >

        <label>name</label>
        <input name='name' />

        <label>email</label>
        <input name='email' />

        <label>pssword</label>
        <input name='password' />
        <button type='submit'>send</button>
      </Form>
    </div>
  )
}
export default App;
