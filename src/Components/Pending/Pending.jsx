import  './Pending.css'
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const Pending = ({todo, completedTodo, deleteTask, handleComplete,isComplete, deleteCompletedTask}) => {
  return (
    <div className="pending">
        <ul>
        {
            isComplete === false && todo.map((value, id) =>{
            return(
                <div className="list" key={id}>
                    <div className="one">
                        <p>{value}</p>
                    </div>
                    <div className="icon">
                        <FaTrash fontSize={"30px"} onClick={() => deleteTask(id)}/>
                        <FaCheck style={{fontSize:"25px" , color:"seagreen"}} onClick={() => handleComplete(id)}/>
                    </div>
                </div>
            )
            }) 
        }

        {
            isComplete === true && completedTodo.map((value, id) =>{
            return(
                <div className="list" key={id}>
                    <div className="one">
                        <p>{value}</p>
                    </div>
                    <div className="icon">
                        <FaTrash fontSize={"30px"} onClick={() => deleteCompletedTask(id)}/>
                        {/* <FaCheck style={{fontSize:"25px" , color:"seagreen"}} onClick={() => handleComplete(id)}/> */}
                    </div>
                </div>
            )
            }) 
        }
        </ul>
  </div>

  )
}

export default Pending
