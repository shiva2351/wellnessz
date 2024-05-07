const express = require("express");
const cors = require("cors");

let tasks = [{name:"shiva",id:1}];
const app = express();
app.use(cors)

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });

  app.get('/tasks', (req, res) => {
    console.log("get1")
    res.json(tasks);
});