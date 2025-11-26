// CN5006 Lab Week 4 - Express REST API
var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Exercise 1: Basic Hello
app.get('/', function(req, res){
    res.send("Hello, it is my first Express application");
});

// Exercise 2: Additional Routes
app.get('/about', function(req, res){
    res.send("This is basic express application");
});

app.get('/users/:userId/books/:bookId', function(req, res){
    res.send(req.params);
});

// Exercise 3: Read JSON File
app.get('/GetStudents', function(req, res){
    fs.readFile(__dirname + "/Student.json", 'utf8', function(err, data){
        if(err) res.send(err);
        res.json({
            status: true,
            Status_Code: 200,
            requrl: req.url,
            request_Method: req.method,
            studentdata: JSON.parse(data)
        });
    });
});

// Exercise 3: Search JSON by ID
app.get('/GetStudentid/:id', (req, res) => {
    fs.readFile(__dirname + "/Student.json", 'utf8', function(err, data){
        var students = JSON.parse(data);
        var student = students["Student" + req.params.id];
        if(student)
            res.json(student);
        else
            res.json({status: false, message: "Student not found"});
    });
});

// Exercise 3: POST Form
app.get('/studentinfo', function(req, res){
    res.sendFile('StudentInfo.html', { root: __dirname });
});

app.post('/submit-data', function(req, res){
    var name = req.body.firstName + ' ' + req.body.lastName;
    var Age = req.body.myAge + ' Gender: ' + req.body.gender;
    var Qual = 'Qualification: ' + req.body.Qual;
    console.log(req.body.Qual);
    res.send({
        status: true,
        message: 'Form Details',
        data: { name: name, age: Age, Qualification: Qual }
    });
});

// Start server
app.listen(5000, function(){
    console.log("Server is running on port 5000");
});
