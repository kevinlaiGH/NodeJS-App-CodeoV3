var express = require('express');
var router = express.Router();
//mailing setting
var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '🚀Codeo - a collaborative platform for pair-programming' });
});

/* creating a new route for about */
router.get('/about', function (req, res, next) {
  res.render('about', { title: '🚀Codeo - a collaborative platform for pair-programming' });
});

/* creating a new route for contact*/
router.route('/contact')
  .get(function (req, res, next) {
    res.render('contact', { title: '🚀Codeo - a collaborative platform for pair-programming' });
  })
  /* creating a form to submit for POST req*/
  .post(function (req, res, next) {
    req.checkBody('name', 'Empty name').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('message', 'Empty message').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
      res.render('contact', {
        title: '🚀Codeo - a collaborative platform for pair-programming',
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      });
    } else {
      var mailOptions = {
        from: 'Codeo <no-reply@codeo.com>',
        to: 'klonto60k@gmail.com',
        subject: 'You got a new message from visitor 🤩🤩',
        text: req.body.message
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return console.log(error);
        }
        res.render('thank', { title: '🚀Codeo - a collaborative platform for pair-programming' });
      });
    }
  });

module.exports = router;
