const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "studentsafetydb",
});

app.post("/register", (req, res) =>{

const inputs = req.body.inputs;

    db.query(
        "INSERT INTO students (Class, Email, First Name, Parent's Name, Parent's Phone Number, Password, Second Name, Student ID) VALUES (?,?,?,?,?,?,?,?)",
        [
        Class,
        Email,
        First_Name,
        Parent_Name,
        Parent_Phone_Number,
        Password,
        Second_Name,
        Student_ID
        ],
        (err, result) => {
            console.log(err);
        }
    );
});

app.listen(4000, () => {
    console.log("server running");
});