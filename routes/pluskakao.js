var express = require('express');
var router = express.Router();

/* Kakao Plus Friend */
router.get('/keyboard', (req, res) => {
  const menu = {
      type: 'buttons',
      buttons: [
        "버튼1",
        "버튼2",
        "버튼3"
      ]
  };

  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(menu));
});

router.post('/message', (req, res) => {
  const _obj = {
    user_key: req.body.user_key,
    type: req.body.type,
    content: req.body.content
  };
  var message = {
    "message": {
      "text": "큽?",
      "message_button": {
        "label": "이거슨 라벨.",
        "url": "http://baram.nexon.com/Home/Index"
      }
    },
    "keyboard": {
      "type": "buttons",
      "buttons": [
        "버튼1",
        "버튼2",
        "버튼3"
      ]
    }
  };
  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify(message));
});

router.post('/friend', (req,res) => {
  const user_key = req.body.user_key;
  console.log(`${user_key}님이 채팅방에 참가했습니다.`);

  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify({success:true}));
});

router.delete('/friend', (req, res) => {
  const user_key = req.body.user_key;
  console.log(`${user_key}님이 채팅방을 차단했습니다.`);

  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify({success:true}));
});

router.delete('/chat_room/:user_key', (req, res) => {
  const user_key = req.params.user_key;
  console.log(`${user_key}님이 채팅방에서 나갔습니다.`);

  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify({success:true}));
});

module.exports = router;
