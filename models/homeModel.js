const mysql = require('../mysql.js')

exports.createDatabase = (next) => {
  let sql = 'CREATE DATABASE IF NOT EXISTS nodemysql'
  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}