const mongoose = require("mongoose");

const accessories = mongoose.Schema(
	{
		name: String,
		image: Array,
		discription: String,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Accessories", accessories);
