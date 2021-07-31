const express = require("express");
var router = express.Router();
const mysql = require("mysql");

router.get("/", function(req, res, next){
    res.send("Api is working properly");
})

router.post("/signup", (req, res, next) =>{
    const student = new Student({
        Class: req.body.Class,
        Email: req.body.Email,
        First_Name: req.body.First_Name,
        Parent_Name: req.body.Parent_Name,
        Parent_Phone_Number: req.body.Parent_Phone_Number,
        Password: req.body.Password,
        Second_Name: req.body.Second_Name,
        Student_ID: req.body.Student_ID
    });
});



module.exports = router;