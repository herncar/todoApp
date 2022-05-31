import { AiFillCheckCircle } from 'react-icons/ai';


function Complete(props){
   
    return(
        
        <button onClick={(e) => completeTask(props.id,props.description)}><AiFillCheckCircle size='25px' /></button>
    )
}
function completeTask(id,descriptions){
  let description=descriptions
  let status= true
    fetch(`http://localhost:3001/tasks/${parseInt(id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({description,status})
    })/*
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        
      });
      */
}
export default Complete