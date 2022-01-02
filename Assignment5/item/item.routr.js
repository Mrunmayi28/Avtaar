const express = require('express');
const router = express.Router();

const itemController = require('../item/item.controller');

//Get all users

router.get('/',itemController.getitemlist);

//Post New User
router.post('/',itemController.createNewitem);

module.exports = router;