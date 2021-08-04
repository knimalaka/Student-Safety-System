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
  console.log(req.body);
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

router.post('/login',(req,res) =>{
  const Email = req.body.Email;
  const Password = req.body.Password;

  mysqlConnection.query(
    "SELECT * FROM students WHERE Email = ? AND Password = ?",
    [Email, Password],
    (err,result) => {
    if (err) {
      res.send({err: err});     
    }

    if (result.length > 0) {
      res.send(result);
    }else{
        res.send({ message: "Wrong Email and Password combination !"});
        }
      } 
    );
  }); 

router.put('/edit',(req,res)=>{
  console.log(req.body);
    const First_Name = req.body.First_Name;
    const Second_Name = req.body.Second_Name;
    const Student_ID = req.body.Student_ID;
    const Class = req.body.Class;
    const Email = req.body.Email;
    const Parents_Phone_Number = req.body.Parents_Phone_Number;
    const Password = req.body.Password;

    mysqlConnection.query(
      "UPDATE students SET First_Name=First_Name,Second_Name=Second_Name,Class=Class,Email=Email,Parents_Phone_Number=Parents_Phone_Number WHERE Student_ID=Student_ID AND Password=Password",
      [First_Name,Second_Name,Student_ID,Class,Email,Parents_Phone_Number,Password],

      (err, rows, fields) =>{
        if(!err){
          res.status(200).send({
            message: 'Welcome '+ First_Name+"!"})
          }
        else
        console.log(err);
      })  
});

module.exports = router; 