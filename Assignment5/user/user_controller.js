const userModel = require('../user/user_modal');

const res = require('express/lib/response');

const req = require("express/lib/request");
const { use } = require('./user_route');


//Get all user List
exports.getuserList = (req, res) => {
    userModel.getAllusers((err, userModel) => {
        console.log('Fetching...');
        if (err)
            res.send(err);
        res.send(userModel);
    })
}

//Create a New User

exports.createNewUser = (req, res) => {
    const userData = new userModel(req.body);
    // console.log('Req:', req.body);
    userModel.createUser(userData, (err, userModel) => {
        if (err) {
            throw err;
        } else{

            res.json({ message: 'success' });

        }
    })
}