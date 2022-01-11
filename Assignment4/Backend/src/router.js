const express = require('express');
const router = express.Router();

const controller = require('../src/controller');

//Get all users
router.get('/',controller.getuserList);

//Post a new user
router.post('/',controller.addNewUser);

router.get('/login',controller.getvalidateUser);

//Validate a user
router.post('/login',controller.validateUser);


module.exports = router;