var MongoClient = require('mongodb').MongoClient,
	test 		= require('assert'),
	uri 		= "mongodb://admin:<qwerty.>@levelbots-shard-00-00-xxoam.mongodb.net:27017,levelbots-shard-00-01-xxoam.mongodb.net:27017,levelbots-shard-00-02-xxoam.mongodb.net:27017/companies?ssl=true&replicaSet=Levelbots-shard-0&authSource=admin";

MongoClient.connect(uri, function(err, data) {
	assert.equal(null, err);
  	console.log("Connected correctly to server");

   	db.close();
});