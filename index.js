const express = require("express");
const app = express();
app.use(express.json());

//console.log(format(new Date(), "yyyy - mm - dd"));
const initilizeDBandServer = async () => {
  try {
    app.listen(3000, () => {
      console.log("Server is running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB Error : ${e.message}`);
    process.exit(1);
  }
};
initilizeDBandServer();