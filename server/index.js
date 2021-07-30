const { Input } = require("@material-ui/core");
const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "studentsafetydb",
});


app.post("/register", (req, res) => {
    const inputs = req.body.inputs;

    db.query(
        "INSERT INTO student (First Name, Second Name, Student ID, Class, Email, Parent's Name, Parent's Phone Number, Password) VALUES (?,?)",
        [inputs],
        (err, result) => {
            console.log(err);
        }
    );
});


app.listen(4000, () => {
    console.log("server running");
});