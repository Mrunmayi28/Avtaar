const DB = require('../../db.config');
const res = require('express/lib/response');
const req = require('express/lib/request');

var event = function(event){
    this.name = event.name,
    this.Description = event.Description,
    this.location = event.location,
    this.startTime = event.startTime,
    this.endTime = event.endTime,
    this.uid = event.uid
}


event.getEvents  = (result) =>{
    DB.query('Select * from event',(err,res)=>{
        if(err){
            console.log('Error while fetching');
            result(null,err);
        }else{
            console.log('Success');
            result(null,res);
        }
    })
}

// event.NewEvent = function(newevent,result){
    
//     function(err,res){
//         if(err){
//             throw(err);
//         }else{
            
//             console.log(res);
            
            
//         }
//     })
//}

event.NewEvent = function(newevents,result){
    DB.query(`insert into event(name,Description,location,startTime,endTime,uid) values ('${newevents.name}','${newevents.Description}','${newevents.location}','${newevents.startTime}','${newevents.endTime}',${newevents.uid});`,
    
    function(err,res){
        if(err){
            console.log('Error while fetching');
            result(null,err)
        }else{
            
            console.log('Success');
            result(null,res);
           
        }
    })
}

module.exports = event;