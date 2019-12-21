const mysql = require('mysql'),
    connection = mysql.createConnection({
        host : 'mysql',
        user : 'development',
        password : 'password',
        database: 'lms_test',
        port: '3306',
        connectTimeout: 1000
    });
 
connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;