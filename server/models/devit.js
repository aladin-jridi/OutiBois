const mongoose = require("mongoose");
const devit = mongoose.Schema(
	{
		nom: String,
		email: String,
		mobile: String,
		address: String,
		domaine: String,
		machines: Array,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Devit", devit);
