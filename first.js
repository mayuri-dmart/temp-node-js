var express = require('express')
var app = express()
app.get('/home', function(request, response) {
    response.send("hello world")
});
app.listen(5000)