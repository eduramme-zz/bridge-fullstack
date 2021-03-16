// var Primes = require('../models/primes');

// Display list of all primes between the 2.
exports.list_primes = (req, res) => {
  let p1 = parseInt(req.params.p1);
  let p2 = parseInt(req.params.p2);

  if (p1 <= 1) {
    p1 = 2;
  }

  if (p2 <= 1) {
    p2 = 2;
  }

  function getPrimes(min, max) {
    var sieve = [], i, j, maxPrimes = [];
    for (i = 2; i < max; ++i) {
        if (!sieve[i] && i) {
            maxPrimes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }

    let primes = maxPrimes.filter((value) => {
      return value > min;
    })

    return primes;
  };

  let primes = getPrimes(p1, p2);

  res.status(200).json({
    primes: primes
  });
}

