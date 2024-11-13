import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import './App.css'
function App(){
  const [mode , setMode] = useState(false)
  const changeMode = () =>{
    mode ? setMode(false) : setMode(true)
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
              mode ? <GoSun  style={{fontSize: "1.5rem"}} onClick={changeMode}/> :<FaMoon style={{fontSize: "1.5rem"}} onClick={changeMode}/> 
            }

          </div>
          
        </div>

      </div>
    </div>
  )
}
export default App