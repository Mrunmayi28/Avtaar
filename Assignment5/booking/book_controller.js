const bookingModel = require('../booking/book_model');

//Get all Booking
const req = require("express/lib/request");
const res = require('express/lib/response');

exports.getBooking = (req,res)=>{
    bookingModel.getAllBooking((err,bookingModel)=>{
        console.log('Fetching...');
        if(err)
        res.sen(err);
        res.send(bookingModel);
    })
}

exports.newBooking = (req,res) =>{
    const newBookingData = new bookingModel(req.body);
    bookingModel.addnewBooking(newBookingData,(err,bookingModel)=>{
        if(err) 
        {
            
            throw err;
            
        }
        else{
            res.json({message:'success'});
                
    
        }
      
    })
}