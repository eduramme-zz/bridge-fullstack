var express = require('express');
var router = express.Router();
const app = express();

/* GET home page. */
router.get('/primes', function(req, res, next) {
  console.log("uou")
  res.render('wuooooo');
});

module.exports = router;
