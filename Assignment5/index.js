const express = require('express');
const bodyparser = require('body-parser');

const app = express();

//Parse request data
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



//Main Page
app.get('/',function(req,res){
    res.send('Welcome to port 6000!!!!');
});

//create user route
const userRoute = require('./user/user_route');
app.use('/user',userRoute);

//item page
const ii = require('./item/item.routr');
app.use('/item',ii);



//Create booking route
const bookingRoute = require('./booking/book_route');
app.use('/booking',bookingRoute);

//Initializing the port
app.listen(5000,()=>{
    console.log('App is running at port 6000');
});