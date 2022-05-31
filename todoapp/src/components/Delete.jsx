import { AiFillDelete } from "react-icons/ai";


function Delete(props){
   
    return(
        
        <button onClick={(e) => deleteTask(props.id)}><AiFillDelete size='25px' /></button>
    )
}
function deleteTask(id) {
    
    fetch(`http://localhost:3001/tasks/${parseInt(id)}`, {
      method: 'DELETE',
    })/*
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        
      });
      */
  }
export default Delete