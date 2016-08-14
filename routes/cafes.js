var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended : true }));

router.get('/', function(req, res) {
  res.send('EZWEL_CAFE_OPEN');
});

router.get('/goods', function(req, res, next) {
  mongoose.model('Goods').find({}, function (err, goods) {
	


  });

});

module.exports = router;
