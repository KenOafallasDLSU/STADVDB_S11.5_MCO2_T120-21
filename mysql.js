const mysql = require('mysql')

exports.db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  //port: "3307",
  //user: "admin",
  password: "p@ssword",
  database: "financial"
})