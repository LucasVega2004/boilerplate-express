let express = require('express');
require('dotenv').config()
let app = express();

app.use("/public", express.static(__dirname + "/public"));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.get('/json', function (req, res) {
    let msgStyle = process.env.MESSAGE_STYLE;

    let msg = "Hello json";

    if(msgStyle==="uppercase"){
        msg=msg.toUpperCase();
    }

    res.json({msg});
});




































module.exports = app;
