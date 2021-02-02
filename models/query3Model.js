const mysql = require('../mysql.js')

exports.query3 = (year, next) => {
  console.log("in query 3")
  let sql = 
       `SELECT e.year AS Year, e.quarter as Quarter, y.characterization as Characterization, COUNT(y.characterization) as Count
       FROM transactions t
         JOIN financialwh.time e ON e.timeid = t.timeid
           JOIN financialwh.type y ON y.typeid = t.typeid
           WHERE e.year = "${year}"
           GROUP BY e.year, e.Quarter, y.characterization WITH ROLLUP
         UNION
           SELECT e.year AS Year, null, y.characterization as Characterization, COUNT(y.characterization) as Count
           FROM transactions t
             JOIN financialwh.time e ON e.timeid = t.timeid
             JOIN financialwh.type y ON y.typeid = t.typeid
             WHERE e.year = "${year}"
             GROUP BY e.year, y.characterization WITH ROLLUP
         UNION
           SELECT null, e.Quarter as Quarter, y.characterization as Characterization, COUNT(y.characterization) as Count
           FROM transactions t
             JOIN financialwh.time e ON e.timeid = t.timeid
             JOIN financialwh.type y ON y.typeid = t.typeid
             WHERE e.year = "${year}"
             GROUP BY e.Quarter, y.characterization WITH ROLLUP
         UNION
           SELECT null, null, y.characterization as Characterization, COUNT(y.characterization) as Count
           FROM transactions t
             JOIN financialwh.time e ON e.timeid = t.timeid
             JOIN financialwh.type y ON y.typeid = t.typeid
             WHERE e.year = "${year}"
             GROUP BY y.characterization WITH ROLLUP
       ORDER BY Year DESC, Quarter DESC, Characterization DESC;`
        
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}
