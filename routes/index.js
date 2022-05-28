var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Website downloader - Take any website offline.' });
});

module.exports = router;
