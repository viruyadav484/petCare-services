var db = require('./connection');
function IndexModel (){
  this.registerUser=(userDetail)=>{
      return new Promise((resolve,reject)=>{  
         db.collection('users').find().sort({"_id": -1}).toArray((err,result)=>{
             console.log("registed responce",result);
             if(err){
                 reject(err);
             }else{
                 var flag=1;
                 var _id;
                 if(result.length == 0){
                    _id = 1;
                 }else{
                     _id = result[0]._id+1;
                     for(let row of result){
                        if(row.email == userDetail.email)
                        flag=0
                     }
                 }
                 console.log("flag",flag);
                 if(flag == 1){
                    userDetail.role = "user";
                    userDetail._id = _id;
                    userDetail.status =0;
                    userDetail.info = Date()
                       db.collection("users").insertOne(userDetail,(err,result)=>{
                          err ? reject(err) :   resolve({"status":1});
                      })
                 }else{
                    resolve({"status":0})
                 }
             }
         })
   
     })
   }

   this.update = (collectionName,condition,setValue)=>{
       return new Promise((resolve,reject)=>{ 
         console.log("users detail is here ",collectionName,condition,setValue);
         db.collection(collectionName).updateOne(condition,setValue,(err,responce)=>{
            err ? reject(err) : resolve(responce);
         })
       });
   }
   this.Find = (collectionName,condition)=>{
      return new Promise((resolve,reject)=>{ 
        db.collection(collectionName).find(condition).toArray((err,responce)=>{
           err ? reject(err) : resolve(responce);
        })
      });
   }
}

module.exports = new IndexModel();