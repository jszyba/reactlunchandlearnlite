let express = require('express');
let router = express.Router();
let data = require('../schedule.json');

router.get('/', function(req, res, next) {
    res.redirect('./schedule');
});

router.get('/schedule', function(req, res, next) {
  res.render('schedule', { data: data });
});

router.get('/tictac', function(req, res, next) {
    res.render('tictac');
});

router.get('/demo', function(req, res, next) {
    res.render('demo');
});

module.exports = router;
