var MongoClient = require('mongodb').MongoClient;
var config = require('./config/config.js');

exports.getList = function (req, res,next) {
    console.log("test begin....");
    MongoClient.connect(config.databaseurl, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        //var whereStr = {"name":'zhangsan'};  // 查询条件
        dbo.collection("student").find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json({
               services:result
            });
            db.close();
        });
    });
}
