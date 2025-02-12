import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//Container creates extra element but fragment doesnt
//outside a function componenent u cannot call any hook
//Component naming must be in uppercase
const AddButton=(props)=>{
  //destrucuring props
  const{value,setValue}=props;


  const increment=()=>
  {
    setValue(value+1);
  }
  return (
    <button onClick={increment}>Increment {value}</button>
  )
}
const DecrementBtn=({value,setValue})=>{//Another way of destructuring props
  // const{value,setValue}=props;
  
  const decrement=()=>{
    setValue(value-1);

  }
  return(
    <button onClick={decrement}>decrement {value}</button>
  )
}

function App() {
  const [value,setValue]=useState(0);
  return (
    <>
    <AddButton value={value} setValue={setValue}/>
    <DecrementBtn value={value} setValue={setValue} />
    </>
  );

}

export default App;
