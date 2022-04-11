var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  console.log("booking ",req.body);
  indexController.usersBooking(req.body).then((result)=>{
   // var msg = result.status == 1 ? "User register successfully !!!!!!!!!!!!!!!!!" : "Failed to registered , User already exits..";
    res.render('index');
  }).catch((err)=>{
    console.log("err",err);
  });
  
});


router.get('/about', function(req, res, next) {
  res.render('aboutsUs');
});
router.get('/service', function(req, res, next) {
  res.render('services');
});

router.get('/price', function(req, res, next) {
  res.render('pricess');
});
router.get('/booking', function(req, res, next) {
  res.render('booking');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/register', function(req, res, next) {
  console.log("users regitration dat ais here ",req.body);
  indexController.registerUser(req.body).then((result)=>{
   // var msg = result.status == 1 ? "User register successfully !!!!!!!!!!!!!!!!!" : "Failed to registered , User already exits..";
    res.render('index');
  }).catch((err)=>{
    console.log("err",err);
  });
  
});

router.get('/verifyUser', function(req, res, next) {
   indexController.verifyUser(req.query.emailId).then((result)=>{
     if(result.status){
       res.redirect('/');
     }else{
      res.render('index');
     }
  }).catch((err)=>{
    console.log("err",err);
  });
});


router.post('/login', function(req, res, next) {
  indexController.userLogin(req.body).then((result)=>{
      console.log("user login responce dara",result);
     if(result.status){
        result.status == 1 ? res.redirect('/admin') : res.redirect('/users');
     }else{
       res.render('index');
     }
   
  }).catch((err)=>{
    console.log("login error",err);
  })
   
});

module.exports = router;
