const express = require('express');
const bodyParser = require('body-parser');

const app =express();

//Parse request data content
app.use(bodyParser.urlencoded({extended:false}));

//Parse request data content to json
app.use(bodyParser.json());

//Main Page 
app.get('/',function (req,res){
    res.send('Welcome !!!!');
});

//create a events route
const eventsRoute = require('./src/events/events_route');
app.use('/events',eventsRoute);

// create a user route
const userRoute = require('./src/user/user_route');
app.use('/user',userRoute);

//Initializing the port
const port =5000;
app.listen(port,()=>{
console.log(`server running at port ${port}`)
});