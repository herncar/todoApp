import Delete from "./Delete";
import React, { useState,useEffect } from 'react';
import Edit from "./Edit";
import Complete from "./Complete";
import Status from "./Status";
import Create from "./Create";
/**
 * 
 * @param {filter} props 
 * @returns Filtered table
 */


function GetToDoList(props){
  const [tasks, setTasks] = useState([]);
  const[change,setChange]= useState(0)
  
  const getTasks = async () => {
    console.log("test")
    try {
      if(props.text===""){
      const response = await fetch("/all", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
      const jsonData = await response.json();
      setTasks(jsonData);
      }
      if(props.text==="true"){
        const response = await fetch("/completed", {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    
        })
        const jsonData = await response.json();
        
        setTasks(jsonData);
        }
        if(props.text==="false"){
          const response = await fetch("/pending", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
          const jsonData = await response.json();
          
          setTasks(jsonData);
          }
    } catch (err) {
      console.log(err)
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  },[props,change]);

  return (
    //creating and returning table
    <>
    <Create setChange={setChange} change={change}/>
    <div className="container">
      <table  className="table table-hover table-striped table-sm mw-100">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            
            <th scope="col">Complete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(tasks => (
            <tr className="table-success" key={tasks.id}>
              <th className="table-success w-50" scope="row">{tasks.description}</th>
              <td className="table-success"><Status status={tasks.status}/></td>
              <td className="table-success">
              <Edit id={tasks.id}description={tasks.description} status={tasks.status} setChange={setChange}change={change}/>
              </td>
              <td className="table-success">
               <Delete id={tasks.id} setChange={setChange} change={change}/>
              </td>
              <td className="table-success">
               <Complete id={tasks.id} description={tasks.description} status={tasks.status} setChange={setChange} change={change}/>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default GetToDoList;