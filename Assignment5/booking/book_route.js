const express = require('express');
const router = express.Router();

const bookingController = require('../booking/book_controller');

//Get all booking

router.get('/',bookingController.getBooking);

//Add a new booking
router.post('/',bookingController.newBooking);



module.exports = router;