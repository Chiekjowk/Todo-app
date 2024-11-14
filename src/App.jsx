import { useState , useRef , useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";


import Pending from "./Components/Pending/Pending.jsx";
import './App.css'
function App(){
  const [mode , setMode] = useState(false)
  const [todo, setTodo] = useState([])
  const [isComplete , setIsComplete] = useState(false)
  const [completedTodo, setCompletedTodo] = useState([])
 
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
  const handleComplete = (index) => {
    let filteredTask = [...todo[index]]
    let updatedCompleteArr = [...completedTodo];
    updatedCompleteArr.push(filteredTask);
    setCompletedTodo(updatedCompleteArr);
    deleteTask(index);
    localStorage.setItem("completedTodo", JSON.stringify(updatedCompleteArr));
  }

  const deleteCompletedTask = (index) => {
    let storedTask = localStorage.getItem("completedTodo")
    if(storedTask == null){
      storedTask = [];
    }
    else{
      storedTask = JSON.parse(storedTask)
    }
    let newCompletedTask = storedTask.filter((value, id) => id !== index);
    localStorage.setItem("completedTodo", JSON.stringify(newCompletedTask));
    setCompletedTodo(newCompletedTask)
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
  

  return (
    <div className={`app ${mode ? "dark" : "light"}`}>
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
          <button className={`btn ${isComplete === false && 'active'}`} onClick={() => setIsComplete(false)}>Pending {`(${todo.length})`}</button>
          <button className={`btn ${isComplete === true && 'active'}`} onClick={() => setIsComplete(true)}>Completed {`(${completedTodo.length})`}</button>
        </div>
        <Pending todo={todo} completedTodo={completedTodo} deleteTask={deleteTask} isComplete={isComplete} handleComplete={handleComplete} deleteCompletedTask={deleteCompletedTask}/>
      </div>
    </div>
  )
}
export default App