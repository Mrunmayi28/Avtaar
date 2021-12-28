
const userModel = require('../user/user_model');

// Get all user List

const req = require("express/lib/request");
// const users = require('../models/user_model');


exports.getuserList = (req,res) =>{
    userModel.getAllUsers((err,userModel)=>{
        console.log('Fetching....');
        if(err)
        res.send(err);
        res.send(userModel);
    })
}

//Get user by id

exports.getUserById = (req,res) =>{
    userModel.getUserById(req.params.uid,(err,userModel)=>{
        if(err){
            console.log(err);

        }else{
            console.log('get user by id');
            res.send(userModel)
        }
    })
}

// user New User

exports.createNewUser =(req,res) =>{
    const userRequestData = new userModel(req.body);
    console.log('Req:',req.body);
    userModel.createUser(userRequestData,(err,userModel)=>{
        if(err)
            res.send(err);
            res.json({message:'success',userModel});
        
    })
}

