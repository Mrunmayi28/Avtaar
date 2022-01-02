var DB = require('../db.config');

const req = require("express/lib/request");
var user = function(user){
    this.uid = user.uid;
    this.name = user.name;
    this.email = user.email;
}

//get all users
user.getAllusers = (result) =>{
    DB.query('SELECT * from user',(err,res)=>{
        if(err){
            console.log('Error while fetching');
            result(null,err);
            
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
    
}

//Create a new user
user.createUser = function(userData,result){
  DB.query('Insert into user set?',userData,
  function(err,res){
      if(err){
        console.log('Duplicate entry ');
        result(null,err);
        
      }else{
        result(null,res);
        console.log(res);
            console.log('User added ');
            
          }
  })  
}


module.exports = user;