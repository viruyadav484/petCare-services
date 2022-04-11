var indexModel =  require("../models/indexModel");
var sendMail = require('./emailApi');

function IndexController(){
  this.manageUsers = ()=>{
    return new Promise((resolve,reject)=>{
      var condition = {role: 'user'};
      var collectionName = 'users'; 
      indexModel.Find(collectionName,condition).then((result)=>{
         console.log("userlogin responce",result);
          resolve(result);
      }).catch((err)=>{
         reject(err)
      })
    });
  }
}

module.exports = new IndexController();