
import './App.css'
import Form from './components/Form'


function App() {


  return (
    <Form onSubmit={(data)=>console.log(data)} className="border shadow-sm rounded-sm p-3 flex flex-col max-w-[600px] mx-auto mt-3 gap-2" >
      <label className='font-semibold text-gray-700'>name</label>
      <input className='outline-none border-2 rounded-md p-1' type="text" name="name"/>
      <label className='font-semibold text-gray-700'>email</label>
      <input className='outline-none border-2 rounded-md p-1' type="text"  name='email'/>
      <label className='font-semibold text-gray-700'>password</label>
      <input className='outline-none border-2 rounded-md p-1' type="text" name='password' />
      <button type='submit'>Submit</button>
    </Form>
  )

}
export default App;
