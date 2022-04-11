var nodemailer = require('nodemailer');
var ejs = require('ejs');
var path  = require('path');

function emailController(){ 

    this.sendMail = (email,password)=>{
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'virendra.synsoft@gmail.com',
            pass: 'Viru@7862'
            // user: 'batchcontent2020@gmail.com',
            // pass: '123@@123'
        }
        });
         let pathName = path.join(__dirname,"../views/emailTemplete/verifyemail.ejs");
         responceData = {
             email: email,
             password: password
         }
         ejs.renderFile(pathName,responceData,(err,data)=>{
             if(err){
                 console.log("error",err);
             }else{
                var mailOptions = {
                    from: '"noreple " <noreple@gmail.com>',
                    to: email,
                    subject: 'Verification Mail from PetLover',
                    html: data
                    };
                
                    transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                 }); 
             }
         })
        
    }
}

module.exports = new emailController();