
const iModel = require('../item/item.model');


const req = require("express/lib/request");


//Get all user List
exports.getitemlist = (req,res) =>{
    iModel.getAllitem((err,iModel)=>{
        console.log('Fetching...');
        if(err)
        res.send(err);
        res.send(iModel);
    })
}

//Create a New User

exports.createNewitem = (req,res) =>{
    const iData = new iModel(req.body);
    console.log('Req:',req.body);
    iModel.createitem(iData,(err,iModel)=>{
        if(err) throw err;
        res.json({status:true,message:'success',data:req.body});
          })
}