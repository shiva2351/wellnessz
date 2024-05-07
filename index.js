const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors)

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
  });