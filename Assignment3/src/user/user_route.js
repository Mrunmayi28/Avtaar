const express = require('express');
const router = express.Router();

const usercontroller = require('../user/user_controller');

//Get all users
router.get('/',usercontroller.getuserList);

//Get all Users by id
router.get('/:uid',usercontroller.getUserById);

//Post New User
router.post('/',usercontroller.createNewUser);



module.exports = router;