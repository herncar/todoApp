import "../index.css"
import React, { useState } from 'react';
import GetToDoList from "./GetToDoList";
/**
 * 
 * @returns radio buttons and table buttons are used to filter table
 */
function Filter(){
    const[filter,setFilter]=useState('')
    return(
    <>
    
    <div className="radio-toolbar" onChange={event=>setFilter(event.target.value)}>
    <fil className="container w-25 ">Filter</fil> 
    <input type="radio" id="radioAll" name="radioFilter" value="" defaultChecked></input>
    <label className="container w-25" for="radioAll">All</label>
    
    <input type="radio" id="radioPending" name="radioFilter" value="false"></input>
    <label className="container w-25" for="radioPending">Pending</label>

    <input type="radio" id="radioComplete" name="radioFilter" value="true"></input>
    <label className="container w-25" for="radioComplete">Complete</label> 
    </div>
    
    <GetToDoList text={filter}/>
    
    </>
    );
}

export default Filter;