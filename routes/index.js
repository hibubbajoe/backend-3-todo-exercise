var express = require('express');
const { title } = require('process');
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
router.get('/', function (req, res) {
  res.render('index', { title: 'Todo', items: items });

});

/* NEW ITEM */
router.post('/add-item', function (req, res) {
  const newItem = req.body;
  newItem.id = 0;

  items.forEach((item) => {
    if (newItem.id <= item.id) {
      newItem.id = item.id;
    }
  })
  newItem.id++

  items.push(newItem)
  res.redirect('/');
})

/* UPDATE ITEM */
router.get('/item/:id', function (req, res) {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);

  res.render('item', { item: item });
});

router.post('/item/:id', function (req, res) {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);

  const { title, body } = req.body;

  item.title = title;
  item.body = body;

  res.redirect('/');
})


module.exports = router;
