"use strict";
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'studentsafetydb',
  });

let router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "@", Date.now());
    next();
});

router.use(cors());

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

router.post('/add',(req,res)=>{
    
    const First_Name = req.body.First_Name;
    const Second_Name = req.body.Second_Name;
    const Student_ID = req.body.Student_ID;
    const Class = req.body.Class;
    const Email = req.body.Email;
    const Parents_Name = req.body.Parents_Name;
    const Parents_Phone_Number = req.body.Parents_Phone_Number;
    const Password = req.body.Password;

    mysqlConnection.query(
      "INSERT INTO students (First_Name,Second_Name,Student_ID,Class,Email,Parents_Name,Parents_Phone_Number,Password) VALUES (?,?,?,?,?,?,?,?)",
      [First_Name,Second_Name,Student_ID,Class,Email,Parents_Name,Parents_Phone_Number,Password],
      (err, rows, fields) =>{
        if(!err){
          res.status(200).send({
            message: 'Welcome '+ First_Name})
          }
        else
        console.log(err);
      })  
});

router.put('/edit',(req,res)=>{
  let stu = req.body;
  var sql = "SET @First_Name = ?;SET @Second_Name = ?;SET @Student_ID = ?;SET @Class = ?;SET @Email = ?;SET @Parents_Name = ?;SET @Parents_Phone_Number = ?;SET @Password =  ?;\
  CALL studentEdit (@First_Name,@Second_Name,@Student_ID,@Class,@Email,@Parents_Name,@Parents_Phone_Number,@Password);";
  mysqlConnection.query(sql,[stu.First_Name,stu.Second_Name,stu.Student_ID,stu.Class,stu.Email,stu.Parents_Name,stu.Parents_Phone_Number,stu.Password],(err, rows, fields) =>{
      if(!err){
        res.status(200).send({
          message: 'Updated successfully!'})
        }
        else
      console.log(err);
    })  
});

module.exports = router; 