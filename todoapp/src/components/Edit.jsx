import { AiFillEdit } from "react-icons/ai";

// Edit Button Triggered by click
// sends put request and updates task description
/**
 * 
 * @param {description} props 
 * @returns Returns button used to send PUT request to server
 */
function Edit(props){
   
    return(
        <button onClick={(event) => editTask(props)}><AiFillEdit size='25px' /></button>
    )
}
function editTask(props) {
    let description = prompt('Edit description',props.description);
    let status = props.status
    if(description!==null){
    fetch(`http://localhost:3001/tasks/${parseInt(props.id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({description,status}),
    })/*
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
      });*/
    }
    
  }
export default Edit