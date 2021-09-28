var express = require('express');
var router = express.Router();

const items = [
  {
    id: 1,
    title: 'Clean youself',
    body: 'Shower, shave and misbehave'
  },
  {
    id: 2,
    title: 'Buy LEGO',
    body: 'Deathstar pls'
  },
  {
    id: 3,
    title: 'Meditate',
    body: 'meditate before you medicate'
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Todo', items: items });
});

module.exports = router;
