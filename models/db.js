var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('connected to mongod server');
});

var uri = 'mongodb://localhost/ecafe';

mongoose.connect(uri, function(err) {
  if(err) {
  	console.log('mongoose connection error : ' + err);
	throw err;
  }

});

//mongoose.createConnection(uri);

