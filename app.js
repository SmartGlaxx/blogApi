const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const allRoutes = require('./routes/posts')
const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://glaxx:Smeg1984@shop-api1.fgv5d.mongodb.net/blog-api?retryWrites=true&w=majority?authSourse=yourDB&w=1', 
{useUnifiedTopology : true, useNewUrlParser : true, useCreateIndex : true})

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content, Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/', allRoutes)

module.exports = app
