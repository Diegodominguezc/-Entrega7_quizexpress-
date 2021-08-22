var express = require('express');
var router = express.Router();
var controller = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits');
});

router.get('/quizzes', controller.index);

module.exports = router;
