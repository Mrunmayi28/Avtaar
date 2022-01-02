var DB = require('../db.config');

const req = require("express/lib/request");
var items  = function(items){
    this.id= items.id;
    this.name = items.name;
    this.uid = items.uid;
}

//get all users
items.getAllitem = (result) =>{
    DB.query('SELECT * from items',(err,res)=>{
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
items.createitem = function(iData,result){
  DB.query('Insert into items set?',iData,function(err,res){
      if(err){console.log(err); 
          result(null,err);
      }else{
          console.log('Items added successfully');
          result(null,result);
      }
  })  
}


module.exports = items;