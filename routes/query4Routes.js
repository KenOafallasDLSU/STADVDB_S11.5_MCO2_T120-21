const router = require('express').Router()
const query4Controller = require('../controllers/query4Controller.js')

router.get('/', query4Controller.renderMain)

router.post('/postQuery4', query4Controller.postQuery4)

module.exports = router