var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.param.name);
 for(key in req.param) {
console.log(key);
}  
res.render('index', { title: 'Express' });
});

module.exports = router;
