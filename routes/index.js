var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi! I am a default message, feel free to chat here!",
    user: "lunstia",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.post('/new', function(req, res, next) {
  messages.unshift({text: req.body.messageText, user: req.body.messageUser, added: new Date()}); 
  res.redirect('/')
})

module.exports = router;
