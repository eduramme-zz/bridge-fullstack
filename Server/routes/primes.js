var express = require('express');
var router = express.Router();
var primes_controller = require('../controllers/primesController');

router.get('/primes/:p1/:p2', primes_controller.list_primes);

module.exports = router;




