"use strict";
const express = require("express");
let router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "@", Date.now());
    next();
});

router
  .route("/register")
  .get((req, res)=>{
      res.send("hi get register here");
  })
  .post((req,res)=>{
      res.send("hi post register here");
  });

module.exports = router; 