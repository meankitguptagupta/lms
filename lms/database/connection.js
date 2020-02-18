const mysql = require('mysql'),
    connection = mysql.createConnection({
        host : 'mysql',
        user : 'development',
        password : 'password',
        database: 'lms',
        port: '3306',
        connectTimeout: 1000
    });
 
connection.connect(function(err) {
  try {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
  } catch (err) {
    // This will not catch the throw!
    console.error(err);
  }
});

module.exports = connection;