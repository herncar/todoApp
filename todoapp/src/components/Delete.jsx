import { AiFillDelete } from "react-icons/ai";

/**
 * 
 * @param {id} props 
 * @returns Button used to send DELETE request to server
 */
function Delete(props){
   
    return(
        
        <button onClick={(event) => deleteTask(props.id,props.setChange,props.change)}><AiFillDelete size='25px' /></button>
    )
}
function deleteTask(id,setChange,change) {
    
    fetch(`/tasks/${parseInt(id)}`, {
      method: 'DELETE',
    }).then(setChange(change+1))/*
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        
      });
      */
     
      
  }
export default Delete