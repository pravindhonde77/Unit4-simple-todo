import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from "./todo.module.css"


const Todo = () => {

     let [value,setValue]=useState("ABCD");
    const[todos,setTodos]=useState([]);

    const onDelete=(id)=>{
        let newTodos=todos.filter((todo)=>todo.id !==id);
        setTodos(newTodos);
    };

// read input
//update todos list
//re-render todos list when updated
//onChange of input read value,
//store the value

//onClick of add button,
//read the store value and it to my todo list


  return (
    <div>
        Todo
        <input value={value} onChange={(e)=>setValue(e.target.value)}/>
        
        <button 
        className='add-button'
        onClick={()=>{
           setTodos([...todos,{id:Date.now(), value:value}]);
           setValue("");
        }}
        >
        +
         </button>
         <div className={styles.todoList}>
        {todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
             
        ))}
        </div>
    </div>
  );
};

export default Todo;