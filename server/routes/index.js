const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());


app.listen(4000, () => {
    console.log("server running");
});