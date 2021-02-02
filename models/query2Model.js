const mysql = require('../mysql.js')

exports.query2 = (accountID, next) => {
  console.log("In query 2")
  let sql = 
       `SELECT  ti.month as month, ti.quarter as quarter, ti.year as year, count(tr.timeid) as 'transactions', sum(tr.amount) as 'total'
        FROM  time as ti, transactions as tr
        WHERE ti.timeid = tr.timeid and tr.accountid = 1
        GROUP BY  ti.year, ti.quarter, ti.month WITH ROLLUP
        ORDER BY  year, quarter, month;`
        
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}
