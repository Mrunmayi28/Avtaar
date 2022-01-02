const express = require('express');
const router = express.Router();

const userController = require('../user/user_controller');

//Get all users

router.get('/',userController.getuserList);

//Post New User
router.post('/',userController.createNewUser);

module.exports = router;