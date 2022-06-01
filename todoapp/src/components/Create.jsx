import React, {useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

//Function creates a form and button which will send a post request to server 

/**
 * 
 * @returns Input form used POST to server
 */
function Create(){

    const [description, setDescription] = useState("Add new task");
    const createTask=(event,description)=>{
      event.preventDefault();
      postTask(description)
      setDescription("Add new task")  
    }
    return(
        <>
        <div>
        <form>
            <input className="w-75 mw-75" type='text'value={description} onChange={event => setDescription(event.target.value)} onClick={(event) => setDescription("")}></input>
            <button className="w-25" type="submit"onClick={(event) => createTask(event,description)}><IoIosAddCircle size='25px' /></button>
        </form>
        </div>
        </>
    )
}


function postTask(description) {
 
    let status = false
    if(description!==null&& description!==""&&description!=="Add new task"){
    fetch(`http://localhost:3001/tasks`, {
      method: 'POST',
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
export default Create