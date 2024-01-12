let express = require('express');
require('dotenv').config()
let app = express();


app.use(function middleware(req, res, next) {

    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
});

app.get("/now",(req, res, next) => {
        // adding a new property to req object
        // in the middleware function
        req.string = new Date().toString();
        next();
    },(req, res) => {
        // accessing the newly added property
        // in the main function
        res.send(req.string);
    }
);

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


































module.exports = app;
