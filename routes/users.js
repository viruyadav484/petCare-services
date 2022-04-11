var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usersHome');
});

router.get('/about', function(req, res, next) {
  res.render('UsersaboutsUs');
});
router.get('/service', function(req, res, next) {
  res.render('userservice');
});

router.get('/price', function(req, res, next) {
  res.render('userspricess');
});
router.get('/booking', function(req, res, next) {
  res.render('userbooking');
});
router.get('/contact', function(req, res, next) {
  res.render('userscontact');
});



module.exports = router;
