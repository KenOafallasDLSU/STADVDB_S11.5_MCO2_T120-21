const query3Model = require('../models/query3Model.js')

exports.renderMain = (req, res) => {
    res.render('query3', {
    pageCSS: "allQuery",
    pageJS: "query3JS",
    pageTitle: "Slice",
    navbarTitle: "Slice",
    years: [
        '1993',
        '1994',
        '1995',
        '1996',
        '1997',
        '1998'
    ],
    result: []
    })
}


exports.postQuery3 = (req, res) => {
  let year = req.body.year;

  query3Model.query3(year, (result) => {
    console.log(result)
    res.send(result)
  })
}