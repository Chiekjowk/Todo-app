import { useState , useRef , useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";


import Pending from "./Components/Pending/Pending.jsx";
import './App.css'
function App(){
  const [mode , setMode] = useState(false)
  const [todo, setTodo] = useState([])
 
  const taskRef = useRef();

  const toggleMode = () =>{
    mode ? setMode(false) : setMode(true)
  }
  
  const inputTask = () =>{
    let task = taskRef.current.value;
    if(task == ""){
      alert('Input a task');
    }
    let storedTask = localStorage.getItem("todo")
    if(storedTask == null){
      storedTask = [];
    }
    else{
      storedTask = JSON.parse(storedTask)
    }
    storedTask.push(task);
    localStorage.setItem("todo", JSON.stringify(storedTask));

    setTodo(storedTask)
    taskRef.current.value = ''
  }


  useEffect(()=>{
    let storedTask = localStorage.getItem("todo")
    if(storedTask == null){
      setTodo([])
    }
    else{
      setTodo(JSON.parse(storedTask));
    }
    
  },[])
  
  const deleteTask = (index) => {
    let storedTask = localStorage.getItem("todo")
    if(storedTask == null){
      storedTask = [];
    }
    else{
      storedTask = JSON.parse(storedTask)
    }
    const newTask = storedTask.filter((value , id) => id !== index);
    localStorage.setItem("todo", JSON.stringify(newTask));
    setTodo(newTask)
  }

  return (
    <div className={mode ? "dark" : "light"}>
      <div className="wrapper">
        <div className="nav">
          <div className="title">
            <h2>Todo App</h2>
          </div>
          <div className="mode">
            {
              mode ? <GoSun  style={{fontSize: "1.5rem"}} onClick={toggleMode}/> :<FaMoon style={{fontSize: "1.5rem"}} onClick={toggleMode}/> 
            }

          </div>
          
        </div>
        <div className="input">
          <input type="text" placeholder="Enter a task" ref={taskRef} />
          <button onClick={inputTask}>Add</button>
        </div>
        <div className="main">
          <button>Pending {`(${todo.length})`}</button>
          <button>Completed {`(${todo.length})`}</button>
        </div>
        <Pending todo={todo} deleteTask={deleteTask}/>
      </div>
    </div>
  )
}
export default App