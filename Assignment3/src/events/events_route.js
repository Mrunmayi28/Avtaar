const express = require("express");

const router = express.Router();

const events_controller = require('../events/events_controller');

//Get all events
router.get('/',events_controller.getEventsList);



//Post a new events
router.post('/',events_controller.createNewEvent);

module.exports  = router;