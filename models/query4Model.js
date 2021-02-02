const mysql = require('../mysql.js')

exports.query4 = (district1, ksymbol1, next) => {
  console.log("in query 4")
  let sql = 
       `SELECT  a.accountDistrict AS District, y.characterization AS Characterization, i.year AS Year, i.quarter AS Quarter, SUM(t.amount)AS Sum
       FROM transactions t, type y , account a, time i
       WHERE t.accountID = a.accountID AND t.typeID = y.typeID AND i.timeID = t.timeID
           AND (a.accountDistrict = "${district1}" )
           AND (y.characterization = "${ksymbol1}")
       GROUP BY  a.accountDistrict, y.characterization, i.year, i.quarter WITH ROLLUP;`
        
  console.log(sql)

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}

/**
 * helper to query district names for the dropdown menu
 * @param {*} next 
 */
exports.queryDistrictNames = (next) => {
  let sql = `SELECT accountDistrict
            FROM account 
            GROUP BY accountDistrict
            ORDER BY accountDistrict ASC;`

  mysql.db.query(sql, (err, result) => {
    if (err) throw err
    next(result)
  })
}