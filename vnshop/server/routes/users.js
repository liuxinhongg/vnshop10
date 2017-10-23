var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('reth a resource aaa qqq');
});

module.exports = router;