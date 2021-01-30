const router = require('express').Router()
const homeController = require('../controllers/homeController.js')

router.get('/', homeController.renderHome)

router.get('/createdb', homeController.createDatabase)

module.exports = router