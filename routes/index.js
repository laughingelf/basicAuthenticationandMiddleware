var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/countries', (req, res, next) => {
  axios.get('url')
    .then((results) => {
      console.log('results: ', results)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router;
