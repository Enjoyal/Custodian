var mysql = require('mysql');
const CONSTANTS = require('./config/constants');
var db = CONSTANTS.db;

/***********
 Database 
***********/
var connection = mysql.createConnection({
    host     : db.host,
    user     : db.user,
    password : db.password,
    database : db.name
});

connection.connect(function(err) {
    if (err) { 
        console.log('error mysql!');
        throw err;
    }else{
        console.log('Connected to database!');
        connection.query("SET NAMES utf8mb4", function(err, result) {
            // Neat!
            if(err) {
                console.log(err);
            }else{
                console.log(result);
            }
        });
    }
});

/* 
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.name,
    debug: false
});

var connection;
 */

module.exports = connection;