const mysql = require('mysql');

const DB = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'admin@123',
    database:'avtaarcapstone'
});

DB.connect(function(error){
    if(error) throw error;
    console.log('Database connected');

})

module.exports = DB;