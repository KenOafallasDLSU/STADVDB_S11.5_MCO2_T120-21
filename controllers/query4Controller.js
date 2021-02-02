const query4Model = require('../models/query4Model.js')

exports.renderMain = (req, res) => {
    
    let promise = new Promise((resolve) => {
        query4Model.queryDistrictNames((result) => {
          resolve(result)
        })
    })
    .then((districtList) => {

        res.render('query4view', {
        pageCSS: "allQuery",
        pageJS: "query4JS",
        pageTitle: "Dice",
        navbarTitle: "Dice",
        districtList: JSON.parse(JSON.stringify(districtList)),
        
        quarterList: [
        {
            val: '1',
            type: '1st Quarter'
        },
        {
            val: '2',
            type: '2nd Quarter'
        },
        {
            val: '3',
            type: '3rd Quarter'
        },
        {
            val: '4',
            type: '4th Quarter'
        }],

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
            type: 'Household Payment'
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
        results: []
        })
    })
}

exports.postQuery4 = (req, res) => {
  let ksymbol1 = req.body.ksymbol1;
  let ksymbol2 = req.body.ksymbol2;
  let district1 = req.body.district1;
  let district2 = req.body.district2;
  let quarter1 = req.body.quarter1;
  let quarter2 = req.body.quarter2;

  query4Model.query4(district1, district2, ksymbol1, ksymbol2, quarter1, quarter2, (result) => {
    console.log(result)
    res.send(result)
  })
}