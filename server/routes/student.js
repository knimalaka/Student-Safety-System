"use strict";
const express = require("express");
const mysql = require("mysql");


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'studentsafetydb'
  });

let router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "@", Date.now());
    next();
});

router
  .get(('/stu'),(req, res) =>{
    mysqlConnection.query('SELECT * FROM students WHERE Student_ID = ?',[req.params.id],(err, rows, fields) =>{
      if(!err)
      res.send(rows);
      else
      console.log(err);
    })
  });

router
  .route("/register")
  .get((req, res)=>{
      res.send("hi get register here");
  })
  .post((req,res)=>{
    mysqlConnection.query('INSERT INTO students (Class, Email, First_Name, Parents_Name, Parents_Phone_Number, Password, Second_Name, Student_ID) VALUES (?,?,?,?,?,?,?,?)', (err, rows, fields) =>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
      })  
});


module.exports = router; 