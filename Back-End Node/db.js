const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_teste_filme",
    waitForConnections: true,  
    connectionLimit: 10,       
    queueLimit: 0,             
});

module.exports = pool;
