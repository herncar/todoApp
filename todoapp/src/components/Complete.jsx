
import { AiFillCheckCircle } from 'react-icons/ai';
/**
 * 
 * @param {id,descriptionm=,status} props 
 * @returns If Button is pending returns button used to complete task
 */

function Complete(props){
   if(props.status===false){
    return(
        
        <button onClick={(event) => completeTask(props.id,props.description,props.setChange,props.change)}><AiFillCheckCircle size='25px' /></button>
    )
   }
   return(
     <>
     
    <button hidden onClick={(event) => completeTask(props.id,props.description,props.setChange,props.change)}><AiFillCheckCircle size='25px' /></button>
    </>
)
   
}
function completeTask(id,descriptions,setChange,change){
  
  let description=descriptions
  let status= true
    fetch(`/tasks/${parseInt(id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({description,status})
    }).then(setChange(change+1))/*
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        
      });
      */
      
      
}
export default Complete