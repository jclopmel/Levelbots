var express 	= require('express'),
	mongoose	= require("mongoose"),
	app			= express();

app.configure (function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get();