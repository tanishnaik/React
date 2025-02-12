import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  const initialState={
    name: '',
    email:'',
    password:'',
    mobileNumber:''
  };
  const [form,setForm]=useState(initialState);//passing initial state in the form of object so as to avoid creation of state variable
  //undefined if no value
  //Changes in setSearch affect 
  //To avoid mutation or changing of objects we use spread
  const onNameChange=(event)=>
  {
    setForm({...form,name:event.target.value});
    console.log(form);

  }
  const onEmailChange=(event)=>
    {
      setForm({...form,email:event.target.value});
      console.log(form);
  
    }
    const onPasswordChange=(event)=>
    {
      setForm({...form,password:event.target.value});
      console.log(form);
      
    }
    const onMobileNumberChange=(event)=>
      {
        setForm({...form,mobileNumber:(event.target.value)});
        console.log(form);
        
      }
    
 
  
  
  return (
    <>
    <div>
      <label>Name</label>
      <input onChange={onNameChange} placeholder='Enter your Name'></input>
      
    </div>
    <div>
      <label>Email</label>
      <input onChange={onEmailChange} placeholder='Enter your Email'></input>
    </div>
    <div>
      <label>Password</label>
      <input onChange={onPasswordChange} placeholder='Enter your Password'></input>
    </div>
    <div>
      <label>Mobile Number</label>
      <input onChange={onMobileNumberChange} placeholder='Enter your Mobile Number'></input>
    </div>

    </>
  );
}

export default App;
