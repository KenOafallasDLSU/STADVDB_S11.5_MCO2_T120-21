const router = require('express').Router();
const query1Controller = require('../controllers/query1Controller');

router.get('/', query1Controller.getQuery1);

router.post('/postQuery1', query1Controller.postQuery1);

module.exports = router;