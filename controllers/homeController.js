const homeModel = require('../models/homeModel.js')

exports.renderHome = (req, res) => {
  res.render('home', {
    pageCSS: "homeCSS",
    pageJS: "homeJS",
    pageTitle: "Home",
    navbarTitle: "STADVDB S11 Group 5 MCO2"
  })
}

exports.createDatabase = (req, res) => {
  homeModel.createDatabase((result) => {
    console.log(result)
    res.send(result)
  })
}