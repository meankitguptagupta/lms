const mysql = require('mysql'),
    connection = mysql.createConnection({
        host : 'mysql',
        user : 'development',
        password : 'password',
        database: 'lms',
        port: '3306'
    });
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;