var express = require('express');
var app = express();

const keycloak = require('./config/keycloak-config.js').initKeycloak();
function sayHello(){
   console.log("hey Dirce");
   
}
// app.use(keycloak.middleware())

var router = require('./controller.js');
app.use('/bankapi', router);

app.get('/', function(req, res){
   
   res.send("Server is up!");
});

app.listen(3000);