var express = require('express');
var router = express.Router();
/* GET omok page */

router.get('/', function(req, res, next) {
  res.render('omok', { title: "KDH's Blog" });
});




module.exports = router;
