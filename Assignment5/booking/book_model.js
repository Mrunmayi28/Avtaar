var DB = require('../db.config');

const req = require("express/lib/request");
var booking = function (booking) {
    this.uid = booking.uid;
    this.id = booking.id;
    this.startTime = booking.startTime;
    this.endTime = booking.endTime;
}

//get all booking

booking.getAllBooking = (result) => {

    DB.query('SELECT * from booking', (err, res) => {
        if (err) {
            console.log('Error while fetching');
            result(null, err);

        } else {
            console.log('Fetched successfully');
            result(null, res);
        }
    })
}

booking.addnewBooking = function (newBookingData, result) {
    DB.query(`Insert into booking(uid,id,startTime,endTime) select ${newBookingData.uid},${newBookingData.id},'${newBookingData.startTime}','${newBookingData.endTime}' where not exists(select * from booking where startTime >='${newBookingData.startTime}' and endTime<='${newBookingData.endTime}' ) `,
    function(err,res){
    
        if (err) {
            throw (err);
        } 
        else {
            result(null, res);
            console.log(res);
            if(res.affectedRows === 1){
                console.log('Inserted');
            }else{
                console.log('Not inserted');
            }
    }
    })
}

module.exports = booking;


