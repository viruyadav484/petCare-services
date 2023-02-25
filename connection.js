//Expres MongoDb Connectivity
var mongoose = require('mongoose');
var url = "mongodb+srv://viru7862n:viru7862@petapp.bnmjjah.mongodb.net/petCare";

mongoose.connect(url);
var db = mongoose.connection;
console.log("Mongodb database connected.....");

module.exports = db;