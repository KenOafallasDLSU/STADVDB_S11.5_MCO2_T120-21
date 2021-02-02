const query4Model = require('../models/query4Model.js')

exports.renderMain = (req, res) => {
    
    let promise = new Promise((resolve) => {
        query4Model.queryDistrictNames((result) => {
          resolve(result)
        })
    })
    .then((districtList) => {

        res.render('query3view', {
        pageCSS: "allQuery",
        pageJS: "query3JS",
        pageTitle: "Slice",
        navbarTitle: "Slice",
        districtList: JSON.parse(JSON.stringify(districtList)),

        kSymbolList: [
        {
            val: 'insurance_payment',
            type: 'Insurance Payment'
        },
        {
            val: 'payment_on_statement',
            type: 'Payment on Statement',
        },
        {
            val: 'interest_credit',
            type: 'Interest Credited'
        },
        {
            val: 'sanction_interest',
            type: 'Sanction Interest'
        },
        {
            val: 'household',
            type: 'Household'
        },
        {
            val: 'retirement_pension',
            type: 'Retirement Pension'
        },
        {
            val: 'loan',
            type: 'Loan Payment'
        },
        {
            val: 'misc_payment',
            type: 'Misc. Payment'
        },
        {
            val: 'misc_credit',
            type: 'Misc. Credit'
        }
        ],
        result: []
        })
    })
}

exports.postQuery3 = (req, res) => {
  let year = req.body.year;

  query3Model.query3(year, (result) => {
    console.log(result)
    res.send(result)
  })
}