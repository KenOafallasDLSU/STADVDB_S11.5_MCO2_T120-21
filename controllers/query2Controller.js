const query2Model = require('../models/query2Model')

exports.getQuery2 = (req, res) => {
    res.render('query2', {
        navbarTitle: "Drill Down",
        pageTitle: "Drill Down",
        pageJS: "query2JS",
        pageCSS: "allQuery",
        results: [{
          month: 'N/A',
          quarter: 'N/A',
          year: 'N/A',
          transactions: 'N/A',
          total: 'N/A'
        }]
    })
}


exports.postQuery2 = (req, res) => {
  let accountID = req.body.accountID;

  query2Model.query2(accountID, (results, err) => {
    console.log(results)
    res.send(results)
  })
}