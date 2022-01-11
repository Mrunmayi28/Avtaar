const express = require('express');
const router = express.Router();

const controller = require('../calendar/controller');

//Get all events
router.get('/',controller.getallEvents);


//POst a event
router.post('/',controller.addNewevent);

module.exports = router;