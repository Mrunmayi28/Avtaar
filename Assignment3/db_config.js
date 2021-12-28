const mysql = require('mysql');

//Creating mysql connection

const DB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin@123',
    database:'avtaar'
});

DB.connect(function(error){
    if(error) throw error;
    console.log('Database connected');
})

module.exports = DB;