let express = require('express');
require('dotenv').config()
let app = express();

app.use("/public", express.static(__dirname + "/public"));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.get('/json', function (req, res) {
    let msgStyle = process.env.MESSAGE_STYLE;

    let msg

    if (msgStyle === "uppercase") {
        msg = "Hello json".toUpperCase();
    } else {
        msg = "Hello json";
    }

    res.json({ "message": msg });
});

app.use(function middleware(req, res, next) {

    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
    res.string;
});

































module.exports = app;
