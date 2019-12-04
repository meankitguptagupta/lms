const fs = require('fs'),
    path = require ('path'),
    connection = require ('./connection');

module.exports = function () {
    // find and read all sql files
    fs.readdirSync (path.join(__dirname, 'migrations')).map(file_name => {
        // check if file is sql
        if (file_name.split('.').pop() === 'sql') {
            // get file content
            let sql = fs.readFileSync(path.join(__dirname, 'migrations', file_name), 'utf8').replace(/\n|\r/g, "");
            connection.query(sql, (error, results, fields) => {
                if (error) throw error;
                console.info (`File Name: ${file_name}`, results.serverStatus, results.message);
            })
        }
    });

    // disconnect after query 
    connection.end();
};