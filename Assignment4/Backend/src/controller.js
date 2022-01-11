const userModel = require('../src/modal');
const res = require('express/lib/response');

const req = require("express/lib/request");
const { use } = require('./router');
//Get all user

exports.getuserList = (req,res) =>{
    userModel.getAllusers((err,userModel)=>{
        console.log('Fetching...');
        if(err)
        res.send(err);
        res.send(userModel);
    })
}

exports.getvalidateUser = (req,res) =>{
    userModel.validUser((err,userModel)=>{
        console.log('Fetching valid user...');
        if(err)
        res.send(err);
        res.send(userModel); 
    })
}

exports.addNewUser = (req,res) =>{
    const newUserData = new userModel(req.body);
    userModel.NewUser(newUserData,(err,userModel)=>{
        if(err){
            throw err;
        } else{
            res.json({message:'success'});
        }
    })
}

exports.validateUser = (req,res) =>{
    var data = req.body;
    userModel.newValidate(data,(err,userModel)=>{
        if(err){
            res.status(400).render('/register',{
                message:'You need email.'
            })
            
        } else{
            
            res.json({message:'success'});
        }
    })
    
}