const mongoose = require("mongoose");

const devit = mongoose.Schema(
	{
		FirstName: String,
        LastName : String,
		Adress : String,
        Telephone : String,
        Email : String,
        DomaineClient : String
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("devit", devit);
