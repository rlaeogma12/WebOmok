var express = require('express');
var router = express.Router();
/* GET omok page */

var room = [];

router.get('/', function(req, res, next) {
  res.render('omokroom');
});

router.get('/:roomname', function(req, res, next){
  var roomname = req.params.roomname;
  res.render('omok', {
    roomID : roomname
  });
});

module.exports = router;
