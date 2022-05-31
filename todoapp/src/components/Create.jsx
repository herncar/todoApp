import { IoIosAddCircle } from "react-icons/io";


function Create(props){
   
    return(
        
        <button onClick={(e) => createTask(props)}><IoIosAddCircle size='25px' /></button>
    )
}
function createTask(){

}

export default Create