/*var Mysqlconnect = require('mysql');
var sql = Mysqlconnect.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'admin',
    database:'test_database'
});
sql.connect();*/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://180.76.155.25:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log("数据库已创建!");
    db.close();
});

exports.getList = function (req, res,next) {
    console.log("test begin....")
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var whereStr = {"name":'zhangsan'};  // 查询条件
        dbo.collection("student").find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)
            db.close();
        });
    });
}