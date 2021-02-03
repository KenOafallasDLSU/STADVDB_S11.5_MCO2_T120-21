const router = require('express').Router()
const query2Controller = require('../controllers/query2Controller.js')

router.get('/', query2Controller.getQuery2)

router.post('/postQuery2', query2Controller.postQuery2)

module.exports = router