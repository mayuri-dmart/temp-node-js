const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

function authentication(req, res, next) {
    var author = req.headers.authorization;
    if (!author) {
        var error = new Error('not authenticated');
        res.setHeader('WWW-Authenticate', 'Basic');
        error.status = 401;
        return next(error);
    }
    var auth = new Buffer.from(author.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    if (user == 'admin' && pass == 'password') {
        next();
    } else {
        var err = new Error('not authenticated');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
}
app.use(authentication);
app.use(express.static(path.join(__dirname, 'main')))
app.listen(3000);