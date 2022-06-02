import Delete from "./Delete";
import React, { useState,useEffect } from 'react';
import Edit from "./Edit";
import Complete from "./Complete";
import Status from "./Status";

/**
 * 
 * @param {filter} props 
 * @returns Filtered table
 */


function GetToDoList(props){
  const [tasks, setTasks] = useState([]);
  console.log(props)
  const getTasks = async () => {
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
  },[]);

  return (
    //creating and returning table
    <>
    
    <div className="container">
      <table  className="table table-hover table-striped table-sm mw-100">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Status</th>
            <th scope="col">Complete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(tasks => (
            <tr className="table-success" key={tasks.id}>
              <th className="table-success w-50" scope="row">{tasks.description}</th>
              <td className="table-success"><Status status={tasks.status}/></td>
              <td className="table-success">
              <Edit id={tasks.id}description={tasks.description} status={tasks.status}/>
              </td>
              <td className="table-success">
               <Delete id={tasks.id} />
              </td>
              <td className="table-success">
               <Complete id={tasks.id} description={tasks.description} status={tasks.status}/>
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