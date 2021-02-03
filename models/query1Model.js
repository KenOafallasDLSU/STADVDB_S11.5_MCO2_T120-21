const mysql = require("../mysql");

exports.query1 = (timeid, next) => {
  var sql = 
  `SELECT trans.timeid as timeid, trans.typeid as typeid, trans.recipientid as recipientid, 
  trans.accountid as accountid, SUM(trans.amount) as total
  FROM financialwh.transactions trans
  WHERE trans.timeid = ?
  GROUP BY trans.timeid, trans.typeid, trans.recipientid, trans.accountid
  WITH ROLLUP;`;

  mysql.db.query(sql, [timeid], (err, result) => {
    if (err) throw err;
    next(result);
  });
};