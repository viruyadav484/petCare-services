var indexModel =  require("../models/indexModel");
var emailController = require('./emailApi');

function IndexController(){
   this.registerUser = (userDetail)=>{
     return new Promise((resolve,reject)=>{
        indexModel.registerUser(userDetail).then((result)=>{
            if(result.status == 1){
               emailController.sendMail(userDetail.email,userDetail.password);
            }
            resolve(result);
        }).catch((err)=>{
           reject(err)
        })
     });
   }

   this.verifyUser = (email)=>{
      return new Promise((resolve,reject)=>{
         var condition = {email: email};
         var setValue = { $set : {status: 1}};
         var collectionName = 'users'; 
         indexModel.update(collectionName,condition,setValue).then((result)=>{
            console.log("check autjakf aksf ",result);
             var status = result ? 1 : 0;
             resolve({status: status});
         }).catch((err)=>{
            reject(err)
         })
      });
   }
  this.userLogin = (postBody)=>{
    return new Promise((resolve,reject)=>{
      var condition = postBody;
      condition.status = 1;
      console.log("userlogin data",condition);
      // var setValue = { $set : {status: 1}};
      var collectionName = 'users'; 
      indexModel.Find(collectionName,condition).then((result)=>{
         console.log("userlogin responce",result);
           var status = result.length > 0 ? result[0].role == 'admin' ? 1 : 2 : 0;
          resolve({status: status});
      }).catch((err)=>{
         reject(err)
      })
    });
  }

  this.usersBooking = (userDetail)=>{
   return new Promise((resolve,reject)=>{
      indexModel.usersBooking(userDetail).then((result)=>{
          if(result.status == 1){
            emailController.sendMail(userDetail.email,userDetail.password);
          }
          resolve(result);
      }).catch((err)=>{
         reject(err)
      })
   });
 }
}

module.exports = new IndexController();