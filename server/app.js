const express = require("express");
const app = express();
const student =  require("./routes/student");
const mysql = require("mysql");
const bodyparser = require("body-parser");

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'studentsafetydb',
  multipleStatements: true
});

app.use(express.json());

app.use("/student", student);

app.get("/", (req, res)=>{
  console.log(req.url);
  res.send("<h1>Hello</h1>");
});

mysqlConnection.connect((err) => {
  if(!err)
    console.log('DB connected successfully !');
  else
    console.log('DB connection failed \n Error :'+ JSON.stringify(err, undefined, 2));
});

app.listen(4000, (err)=>{
  if (err) {
    console.log("there is a problem", err);
    return;
  }
  console.log("listening on port 4000");
});



 