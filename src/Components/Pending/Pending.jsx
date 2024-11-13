import  './Pending.css'
import { FaTrash } from "react-icons/fa";
const Pending = ({todo, deleteTask}) => {
  return (
    <div className="pending">
        <ul>
        {
            todo?.map((value, id) =>{
            return(
                <div className="list" key={id}>
                    <div className="one">
                        <input type="checkbox" />
                        <p>{value}</p>
                    </div>
                    <FaTrash fontSize={"30px"} onClick={() => deleteTask(id)}/>
                </div>
            )
            })
        }
        
        </ul>
  </div>

  )
}

export default Pending
