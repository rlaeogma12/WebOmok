var express = require('express');
var router = express.Router();
/* GET omok page */

var roomNumber = 5;

router.get('/', function(req, res, next) {
  res.render('omok', {
    title: "KDH's Blog",
    length: roomNumber
  });
});






module.exports = router;
