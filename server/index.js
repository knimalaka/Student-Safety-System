const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "studentsafetydb",
})


app.listen(4000, () => {
    console.log("server running");
});