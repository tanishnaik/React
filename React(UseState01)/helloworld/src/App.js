import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//1.useState part-I
// function MyApp() {
//   //destructuring the use State to value which holds the value and setvalue to change the value
//   // const[count,setCount]=useState(7);//setting initial count to be 0
// // const increase=()=>{
// //   console.log({count});
// //   setCount(count+1);
// // }
// // const decrease=()=>{
// //   setCount(count-1);
// // }
// //batch updater function
// // const increase=()=>{
// //   setCount((previousCount)=>previousCount+1);//8
// //   setCount((previousCount)=>previousCount+1);//9
// //   setCount((previousCount)=>previousCount+1);//10
// // }
// // const decrease=()=>{
// //   setCount((previousCount)=>previousCount-1);//9
// //   setCount((previousCount)=>previousCount-1);//8
// //   setCount((previousCount)=>previousCount-1);//7
// // }
//   return (
//     <div className="App">
//     <h1>JSX</h1>
//     <h2>Counter {count}</h2>
//     <button onClick={increase}>increase</button>
//     <button onClick={decrease}>decrease</button>
//     </div>
//     );
// }
//Usestate-Part-II
function myApp()
{
  return (
   <>
   <h1>Hello I m JSX</h1>
   </>
  );
}

export default myApp;
