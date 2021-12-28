const eventsModel = require('../events/events_model');

//Get all events List
const req = require("express/lib/request");
//const events =require('../events/events_model');

exports.getEventsList = (req,res) =>{
    eventsModel.getAllevents((err,eventsModel)=>{
        console.log('getting....');
        if(err){
        res.send(err);
        }else{
        res.send(eventsModel);
    }})
}

exports.createNewEvent = (req,res) =>{
    const eventRequestData = new eventsModel(req.body);
    console.log('Req:',req.body);
    eventsModel.addNewEvent(eventRequestData,(err,eventsModel)=>{
        if(err){
            res.send(err);
        }else{
            res.json({message:'success',eventsModel});
    }})
}