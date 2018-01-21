var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "KDH's Blog" });
});

router.get('/submit', function(req, res, next) {
  res.render('login', { title: "KDH's Blog" });
});

module.exports = router;
