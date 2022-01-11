var DB = require('../db.config');
const res = require('express/lib/response');
const req = require('express/lib/request');

var user = function(user){
    this.uid = user.uid,
    this.name = user.name,
    this.age = user.age,
    this.gender = user.gender,
    this.email = user.email,
    this.password = user.password
}

//get all users
user.getAllusers = (result) =>{
    DB.query('Select * from user',(err,res)=>{
        if(err){
            console.log('Error while fetching');
            result(null,err);
        }else{
            console.log('Success');
            result(null,res);
        }
    })
}

user.validUser = (result) =>{
    DB.query('Select email,password from user',(err,res) =>{
        if(err){
            console.log('Error while fetching');
            result(null,err);
        }else{
            console.log('Success');
            result(null,res);
        } 
    })
}

//Create new user
user.NewUser = function(newUserData,result){
    DB.query(`insert into user(uid,name,age,gender,email,password) select ${newUserData.uid},'${newUserData.name}',${newUserData.age},'${newUserData.gender}','${newUserData.email}','${newUserData.password}' where not exists (select * from user where email = '${newUserData.email}');`,
    function(err,res){
        if(err){
            throw(err);
        }else{
            result(null,res);
            console.log(res);
            if(res.affectedRows == 1){
                console.log('Pushed successfully')
            }else{
                console.log('Not Pushed');
            }
            
            
        }
    })
}

//Validate a user

user.newValidate = (data,result)=>{
    DB.query(`Select * from user where email= '${data.email}' and password = '${data.password}'`,function(err,res){
     if(res.length>0){
        console.log('sucess');
        result(null,res);
       }else{
        
        console.log('Data not found');
        
        
       }
      
    })
}
module.exports = user;