const mysql = require('../mysql.js')

exports.query4 = (district1, district2, ksymbol1, ksymbol2, quarter1, quarter2, next) => {
  console.log("in query 4")
  let sql = 
       `SELECT  a.accountDistrict AS District, y.characterization AS Characterization, i.quarter AS Quarter, SUM(t.amount)AS Sum
        FROM transactions t, type y , account a, time i
        WHERE t.accountID = a.accountID AND t.typeID = y.typeID AND i.timeID = t.timeID
              AND (a.accountDistrict = "${district1}" OR a.accountDistrict = "${district2}")
              AND (y.characterization = "${ksymbol1}" OR y.characterization = "${ksymbol2}")
              AND (i.quarter = "${quarter1}" OR i.quarter = "${quarter2}") 
        GROUP BY y.characterization,  a.accountDistrict, i.quarter WITH ROLLUP;`
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