/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* Name: Tanveer Patel Student ID: 174988212 Date: 10/05/2023
* Online (Cyclic) URL: https://careful-elk-pocketbook.cyclic.app/ 
********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (resq, res) => {
    res.send("Name: Tanveer Patel <br> ID: 174988212 <br> I am a student in Seneca College studying CPA program and i love to play outdoor games");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);