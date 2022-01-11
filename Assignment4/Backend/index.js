const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())

//Parse request data
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//Main Page
app.get('/',function(req,res){
    res.send('Welcome to home page');
});

//Create a user registeration and login route
const user = require('./src/router');
app.use('/user',user);

//event 
const calendar = require('./src/calendar/router');
app.use('/calendar',calendar);


app.listen(5000,function(req,res){
    console.log('Server is running');
});