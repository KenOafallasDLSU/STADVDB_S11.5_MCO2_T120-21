const router = require('express').Router()
const query3Controller = require('../controllers/query3Controller.js')

router.get('/', query3Controller.renderMain)

router.post('/postQuery3', query3Controller.postQuery3)

module.exports = router