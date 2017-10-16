var express 	= require('express'),
	mongoose	= require("mongoose"),
	bodyParser	= require ("body-parser"),
	app			= express(),
	port 		= process.env.PORT || 8000,
	companies 	= require("./data/companies")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*---------------------------------------------Files loading ------------------------------------------------*/

app.use("/styles", express.static(__dirname + '/styles'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));

app.get("/company", function(req, res){
	res.sendFile(__dirname + ("/index.html"))
})

app.get("/company/:companyName", function(req, res){

})

app.post("/company", function(req, res){
	console.log(done);
})

app.put("/company/:companyName", function(req, res){

})

app.delete("/company/:companyName", function(req, res){

})

mongoose.connect("mongodb://localhost:27017/companies",function(err, res){
	if(err) throw err 
	console.log("Sucessfull DB connection")

	app.listen(port, function(){
		console.log("Running server");
	})
})
