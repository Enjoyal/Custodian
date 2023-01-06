
var appEnv = 'development';
var db;

/* Development settings */
if (appEnv === 'development') {
    console.log('Running development environment');
    /// DB running on shyam's machine
    db = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        name: 'db_custodian'
    }
}


module.exports = {db};