import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {v4 as uuid} from 'uuid';
//whatever u r writing to show on view we use state for it

function App() 
{

const [todo,setTodo]=useState();//Search state
const [todoList,setTodoList]=useState([]);//for the todo list

//Storing the value into todo by setTodo function
  const onSearchChange=(event)=>
  {
    let value=event.target.value;
    setTodo(value);
  }
  const onButtonClick=()=>
  {
    //To add fields into the object todolist and set it value we need to spread the array and create two objects with fields id:uuid and todo:todo
    //to change the todoList we use the state variable setTodoList
    setTodoList([...todoList,{id:uuid(),todo:todo,isCompleted:false}]);
    console.log(todoList);
    setTodo("");//clears the input after clicking on the add button

  }
  //delete button
  //In order to delete a particular todo we compare the gicen id with clicked id and use filter to delete them
  const onDeleteClick=(id)=>
  {
    console.log(id);//id is always unique
    const updatedTodoList=todoList.filter((item)=>item.id !== id);
    console.log(updatedTodoList);
    setTodoList(updatedTodoList);
    // console.log(todo);

  }
  const onToDoCheckChange=(id)=>
  {
    
    const updatedChangedTodoList=todoList.map((item)=>item.id ===id ?{...item,isCompleted:!item.isCompleted}:item )
setTodoList(updatedChangedTodoList);
console.log(updatedChangedTodoList);
  }
  
  return (
    //Creating a skeleton of the strucutre
   <>
   <h1>My wishList</h1>
   <div>
    {//controlled input->add value attribute where value is controlled by the state
}
   <input value={todo} onChange={onSearchChange} placeholder='Add your wishlist'></input>
   <button onClick={onButtonClick}>Add button</button>
   </div>
   <div>
    {
      todoList && todoList.length>0 && todoList.map((item)=>
      <div key={item.id}>
        <label>
          <input onChange={()=>onToDoCheckChange(item.id)} type='checkbox'></input>
          {/* //Adding a conditon class to the span */}
          <span className={item.isCompleted?'strike-through':''}>{item.todo}</span>
        </label>
        <button onClick={()=>onDeleteClick(item.id)}>Delete</button>
      </div>)
    }
    <div>
      
      
    </div>
   </div>
   


   </>
  );

}

export default App;
