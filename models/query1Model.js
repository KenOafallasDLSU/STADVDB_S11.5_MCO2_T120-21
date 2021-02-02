const mysql = require("../mysql");

exports.query1 = (query, next) => {
  var sql = 
  `SELECT trans.timeid as timeid, trans.typeid as typeid, trans.recipientid as recipientid, 
          trans.accountid as accountid, SUM(trans.amount) as total, AVG(trans.amount) as average
  FROM financialwh.transactions trans
  GROUP BY trans.timeid, trans.typeid, trans.recipientid, trans.accountid
  WITH ROLLUP;`;

  mysql.db.query(sql, (err, result) => {
    if (err) throw err;
    next(result);
  });
};