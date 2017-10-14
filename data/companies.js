var mongoose		= require("mongoose"),
	Schema 			= mongoose.Schema,
	companySchema 	= Schema({
		name 	: String,
		link 	: String,
		id 		: String
	})

mongoose.model("companies",companySchema);