const Pool = require('pg').Pool
require("dotenv").config();


const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool = new Pool({
  connectionString:
    proConfig,
    ssl: { rejectUnauthorized: false },
});
const getTasks=()=>{

    return new Promise( function(resolve, reject){
        pool.query('SELECT * FROM tasks ORDER BY id ASC',(error, results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const getCompletedTasks=()=>{
    return new Promise( function(resolve, reject){
        pool.query('SELECT * FROM tasks WHERE status = true ORDER BY id ASC',(error, results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const getPendingTasks=()=>{
    return new Promise( function(resolve, reject){
        pool.query('SELECT * FROM tasks WHERE status = false ORDER BY id ASC',(error, results)=>{
            if(error){
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const addTask = (description)=>{
    return new Promise( function(resolve, reject){

        pool.query('INSERT INTO tasks (description,status) VALUES($1,$2) RETURNING *',[description,'false'],(error, results)=>{
            if(error){
                reject(error)
            }
            resolve('New task has been added to ToDo list');
        })
    })

}

const deleteTask= (id)=>{
    return new Promise( function(resolve, reject){
    
        pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(`Task Successfully Deleted`)
          })
        })

}
const editTask=(body, id)=>{
    return new Promise( function(resolve, reject){
        const {description,status}=body
      
        pool.query('UPDATE tasks SET description =$1,status=$2 WHERE id=$3', [description,status,parseInt(id)], (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(`Task Successfully Updated`)
          })
        })

}
const completeTask=(id)=>{
    return new Promise( function(resolve, reject){
        
        pool.query('UPDATE tasks SET status =$1 WHERE id=$2', ['True',id], (error, results) => {
            if (error) {
              reject(error)
            }
            resolve(`Task Successfully Completed`)
          })
        })

}

module.exports={
    getTasks,
    deleteTask,
    addTask,
    editTask,
    completeTask,
    getCompletedTasks,
    getPendingTasks,
}