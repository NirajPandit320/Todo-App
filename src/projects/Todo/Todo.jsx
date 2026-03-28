import "./Todo.css";
import {useState} from "react";
import { MdCheck } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export const Todo = () => {
  const[inputValue,setInputValue]=useState("");
  const[task,setTask]=useState([]);

const handleInputChange=(value)=>{
  setInputValue(value);

}
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      alert("Task already exists");
      setInputValue("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  }



return(
  <section className="todo-container">
    <h1>Todo List</h1>
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event)=>{handleInputChange(event.target.value)}} />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
    <section>
      <ul>
       {task.map((curTask,index)=>{
          return <li key={index} className="todo-item"> 
          <span>{curTask}</span> 
          <button className="check-btn"><MdDelete /></button>
          <button className="delete-btn"><MdCheck /></button>
          </li>
       }

      )}
      </ul>
    </section>
  </section>
);
}
