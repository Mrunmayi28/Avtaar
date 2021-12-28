var DB = require('../../db_config');

var Event = function(event){
    this.id = event.id;
    this.name = event.name;
    this.ocurrence = event.ocurrence;
    this.startDate = event.startDate;
    this.endDate = event.endDate;
    this.uid = event.uid;
}

//get all events

Event.getAllevents = (result) =>{
    DB.query('SELECT * FROM event',(err,res)=>{
        if(err){
            console.log('Error while Fetching',err);
            result(err);
        }else{
            console.log('Fetched successfully');
            result(res);
        }
    })
}

//Add New Event
Event.addNewEvent = (eventRequestData, result) =>{
    DB.query('INSERT INTO event SET ?',eventRequestData,(err,res)=>{
        if(err){
            console.log('Error while inserting events');
            result(null,err);
        }else{
            console.log('Event added');
            result(null,result);
        }
    })
}

module.exports = Event;