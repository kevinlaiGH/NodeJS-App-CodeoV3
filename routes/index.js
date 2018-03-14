var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Codeo - a collaborative platform for pair-programming' });
});

/* creating a new route for about */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Codeo - a collaborative platform for pair-programming' });
});

/* creating a new route for contact*/
router.route('/contact')
  .get(function (req, res, next) {
    res.render('contact', { title: 'Codeo - a collaborative platform for pair-programming' });
  })
  /* creating a form to submit for POST req*/
  .post(function (req, res, next) {
    res.render('thank you', { title: 'Codeo - a collaborative platform for pair-programming' });
  });

module.exports = router;
