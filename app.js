var express = require('express');
var app = express();
app.get('/',function (req,res) {
    res.send("<h1>Hello Word</h1>");
});

app.listen(4000, function () {
    console.log("sever running");
    console.log("http://localhost:4000/");
})