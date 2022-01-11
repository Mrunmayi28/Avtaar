const calendarModel = require('../calendar/Modal');


exports.getallEvents = (req,res) =>{
    calendarModel.getEvents((err,calendarModel)=>{
        console.log('Fetching...');
        if(err)
        res.send(err);
        res.send(calendarModel);
    })
}

exports.addNewevent = (req,res) =>{
    const newevents = new calendarModel(req.body);
    calendarModel.NewEvent(newevents,(err,calendarModel)=>{
        if(err){
            
            throw err;
        } else{
            res.json({message:'success'});
        }
    })
}