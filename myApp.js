let express = require('express');
require('dotenv').config()
let app = express();

app.use("/public", express.static(__dirname + "/public"));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.get('/json', function (req, res) {
    res.process.env.MESSAGE_STYLE({ "message": "Hello json" })
});




































module.exports = app;
