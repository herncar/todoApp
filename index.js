const express = require('express')
const app = express()
const path= require("path")
const PORT = process.env.PORT||3001
const cors= require("cors")
app.use(cors());
const tasks = require('./tasks.js')

app.use(express.json())
app.use(express.static(path.resolve(__dirname, "./todoapp/build")));
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"todoapp/build")));
}



app.get('/all', (req, res) => {
  tasks.getTasks()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.get('/completed', (req, res) => {
  tasks.getCompletedTasks()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.get('/pending', (req, res) => {
  tasks.getPendingTasks()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/tasks', (req, res) => {
    const {description} = req.body
  tasks.addTask(description)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/tasks/:id', (req, res) => {
  tasks.deleteTask(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.put('/tasks/:id', (req, res) => {
    
  tasks.editTask(req.body,req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.get("*", (req, res, next) => {

  res.sendFile(path.resolve(__dirname, "./todoapp/build", "index.html"));
});
  
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
  })