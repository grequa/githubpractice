console.log(process.platform);
console.log(process.env.USER);

/*deleted part here
see if appears in github*/

var express = require('express');
var app = express();
var swaggerUi = require('swagger-ui-express');
var swaggerDoc = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
/*
    app.get('/', function(req, res){
        response.sendFile(__dirname+"/index.html");
    });
    app.get('/swagger', function(req, res){
         res.sendFile(__dirname + "/swagger.json");      
    });
    app.get("/my/getemail", function (req, res){
        var firstname = req.query.firstname;

        if (firstname != "") {
            res.send("Your email address is " + firstname + "@gullele.com");
        } else {
            res.send("Please provide us first name");
        }
    });
    app.get('/my/about', function(req, res){
        res.send("about this web app");
    });
    app.get('/my/contact', function(req, res){
        res.send('this is my contact');
    });*/
app.listen(6969);
 
console.log("Something awesome to happen at http://localhost:6969/api-docs");