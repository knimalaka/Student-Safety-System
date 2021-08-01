"use strict";
const express = require("express");
const mysql = require("mysql");


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'studentsafetydb',
    multipleStatements: true
  });

let router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "@", Date.now());
    next();
});

router.get('/stud',(req, res) =>{
  mysqlConnection.query('SELECT * FROM students',[req.params.id],(err, rows, fields) =>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

router.get('/stud/:id',(req, res) =>{
  mysqlConnection.query('SELECT * FROM students WHERE Student_ID = ?',[req.params.id],(err, rows, fields) =>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

router.post('/register',(req,res)=>{
    let stu = req.body;
    var sql = "SET @First_Name = ?;SET @Second_Name = ?;SET @Student_ID = ?;SET @Class = ?;SET @Email = ?;SET @Parents_Name = ?;SET @Parents_Phone_Number = ?;SET @Password =  ?;\
    CALL studentAddOrEdit (@First_Name,@Second_Name,@Student_ID,@Class,@Email,@Parents_Name,@Parents_Phone_Number,@Password);";
    mysqlConnection.query(sql,[stu.First_Name,stu.Second_Name,stu.Student_ID,stu.Class,stu.Email,stu.Parents_Name,stu.Parents_Phone_Number,stu.Password],(err, rows, fields) =>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
      })  
});

module.exports = router; 