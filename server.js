var express = require('express');
var app = express();
var path=require("path");



//server configuration
//app.use(express.static(path.join(__dirname,'public')));

 app.get('/',(req, res)=> {
   res.sendFile('index.html',{root:__dirname});
});
 

app.get('/hello',(req, res)=> {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:43};
  res.send(person);
});

 
var server = app.listen(8081);