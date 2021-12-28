var DB =require('../../db_config');


var User = function(user){
    this.uid = user.uid;
    this.name = user.name;
    this.gender = user.gender;
    this.email = user.email;
    this.age = user.age;
}

//get all users

User.getAllUsers = (result) =>{
    DB.query('SELECT * FROM user',(err,res)=>{
        if(err){
            console.log('Error while Fetching ',err);
            result(null,err);
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

//Get user by Id
User.getUserById = (uid,result) =>{
    DB.query('SELECT * FROM user where uid=?',uid , (err,res)=>{
        if(err){
            console.log(err);
            result(null,err);
        }else{
            console.log(`Fetched data of user ${uid}`);
            result(null,res);
        }

    })
}

//create a user
User.createUser = (userRequestData,result)=>{
    DB.query('INSERT INTO user SET ?',userRequestData,(err,res)=>{
        if(err){
            console.log('Error while Inserting Data');
            result(null,err);
        }else{
            console.log('User added');
            result(null,result);
        }
    })
}

module.exports = User;