const query1Model = require('../models/query1Model');

exports.getQuery1 = (req, res) => {
  res.render('query1', {
    navbarTitle: "Roll Up Using Transactions Table",
    pageTitle: "Query 1: Roll Up",
    pageJS: "query1JS",
    pageCSS: "query1CSS",
    headers: [
      {label: "Time ID"},
      {label: "Type ID"},
      {label: "Recipient ID"},
      {label: "Account ID"},
      {label: "Total Amount"}
    ],
    selectTypeOptions: [
      {option: "19930105"},
      {option: "19930107"},
      {option: "19930110"},
      {option: "19930111"}
    ],
    selectTypeLabel: "Time ID",
    results: [{
      timeid: "N/A",
      typeid: "N/A",
      recipientid: "N/A",
      accountid: "N/A",
      total: "N/A",
      average: "N/A"
    }]
  });
};

exports.postQuery1 = (req, res) => {
  let timeid = req.body.timeid;
  query1Model.query1(timeid, (results, err) => {
    res.send(results);
  });
};