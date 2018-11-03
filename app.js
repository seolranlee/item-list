var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
//
var mysql      = require('mysql');
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1111',
    database : 'topics'
});

conn.connect();

app.get('/',function(req, res){
    res.send('success')
})

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
