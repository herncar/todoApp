
/**
 * 
 * @param {status} props 
 * @returns returns pending or completed depending on status of task
 */
 function Status(props){
    let state ="";

    if(props.status===false){
        state="Pending"
    }else{
        state="Complete"
    }
    
    return (
        state
    );
}
export default Status