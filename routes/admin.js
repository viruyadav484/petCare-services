var express = require('express');
var router = express.Router();
var adminCountroller = require('../controller/adminController');
/* GET users listing. */
router.get('/', function(req, res, next) {
    adminCountroller.manageUsers().then((result)=>{
        res.render('manageuser',{result:result});
    }).catch((err)=>{
      console.log("login error",err);
    })
    // res.render('adminHome');
});

router.get('/users', function(req, res, next) {
    adminCountroller.manageUsers().then((result)=>{
        res.render('manageuser',{result:result});
    }).catch((err)=>{
      console.log("login error",err);
    })
     
   
});

router.get('/EnquiryUsers', function(req, res, next) {
    adminCountroller.manageUsers().then((result)=>{
        res.render('EnquiryUsers',{result:result});
    }).catch((err)=>{
      console.log("login error",err);
    })
});

router.get('/bookingList', function(req, res, next) {
    adminCountroller.manageUsers().then((result)=>{
        res.render('bookingList',{result:result});
    }).catch((err)=>{
      console.log("login error",err);
    })
});

router.get('/newsLatter', function(req, res, next) {
    adminCountroller.manageUsers().then((result)=>{
        res.render('newsLatter',{result:result});
    }).catch((err)=>{
      console.log("login error",err);
    })
});






module.exports = router;
 