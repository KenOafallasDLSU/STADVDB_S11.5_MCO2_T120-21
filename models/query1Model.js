const mysql = require("../mysql");

exports.query1 = (query, next) => {
  var sql = 
  `SELECT trans.timeid as timeid, trans.typeid as typeid, trans.recipientid as recipientid, 
  trans.accountid as accountid, SUM(trans.amount) as total
  FROM financialwh.transactions trans
  WHERE trans.timeid BETWEEN 19930105 AND 19930111
  GROUP BY trans.timeid, trans.typeid, trans.recipientid, trans.accountid
  WITH ROLLUP;`;

  mysql.db.query(sql, (err, result) => {
    if (err) throw err;
    next(result);
  });
};