const express = require("express");
const app = express();
const student =  require("./routes/student");

const mysql = require("mysql");



app.use(express.json());

app.use("/student", student);

app.get("/", (req, res)=>{
    console.log(req.url);
    res.send("<h1>Hello</h1>");
});


app.listen(4000, (err)=>{
  if (err) {
    console.log("there is a problem", err);
    return;
  }
  console.log("listening on port 4000");
});