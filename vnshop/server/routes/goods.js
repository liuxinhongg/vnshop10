var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/27017/shop');
mongoose.connection.on('connected', function() {
        console.log("Mongodb connected success");
    })
    //连接失败
mongoose.connection.on('error', function() {
        console.log("Mongodb connected error");
    })
    //关闭数据库
mongoose.connection.on('disconnected', function() {
    console.log("Mongodb disconnted");
})
router.get('/', function(res, req, net) {
    res.json("你现在访问的是api");
})
module.exports = router()