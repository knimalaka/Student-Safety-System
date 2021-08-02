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

router.post('/add',(req,res)=>{
    const Admin_Name = req.body.Admin_Name;
    const Admin_ID = req.body.Admin_ID;
    const Email = req.body.Email;
    const Phone_Number = req.body.Phone_Number;
    const Password = req.body.Password;

    mysqlConnection.query(
      "INSERT INTO admins (Admin_Name,Admin_ID,Email,Phone_Number,Password) VALUES (?,?,?,?,?)",
      [Admin_Name,Admin_ID,Email,Phone_Number,Password],
      (err, rows, fields) =>{
        if(!err){
          res.status(200).send({
            message: 'Welcome '+ Admin_Name})
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