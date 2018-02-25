const express = require("express");
const app = express();

const server = app.listen(8082, function(){
    console.log("Server is listening at 8082");
});

app.use(express.static('public'));