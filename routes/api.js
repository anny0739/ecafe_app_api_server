var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    bodyParser = require('body-parser');


var Goods = require('../models/cafe');
//var Goods = mongoose.model('Goods');

router.use(bodyParser.urlencoded({extended : false }));

router.get('/', function(req, res, next){
  res.send('EZWEL_CAFE_API STARTED');
});

router.get('/goods', function(req, res, next) {
  mongoose.model('Goods').find({}, function (err, goods) {
	if ( err ) {
		return console.error(err);
	} else {
	   //res.format({
	   // html : function() {
	//	res.render('goods', {
	//		name : 'Mini Umbrella',
//			'goods' : goods
//		});
//	    },
//	    json : function() {
//	      res.json();
//	    }
//	});
	  res.json({goods});
     }
  });

});

router.post('/goods', function(req, res, next) {
  var goods = new Goods({
   name : req.body.name,
   price : req.body.price,
   reg_date : new Date()
  });
 
  goods.save(function(err) { 
   if(err) {
     console.error(err);
     res.json({result:0});
     return;
    }
    res.json({result:1});
  });

});

module.exports = router;
