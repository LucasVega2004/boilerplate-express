let express = require('express');
require('dotenv').config()
let app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function middleware(req, res, next) {

    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
});

app.get("/now", (req, res, next) => {
    // adding a new property to req object
    // in the middleware function
    req.string = new Date().toString();
    next();
}, (req, res) => {
    // accessing the newly added property
    // in the main function
    res.json({ time: req.string });
}
);
app.post("/name", function (req, res) {
    
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
});
app.get("/:word/echo", (req, res) => {
    res.json({ "echo": req.params.word });
});
app.get("/name", (req, res) => {
    res.json({ "name": req.query.first + " " + req.query.last });
});
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
