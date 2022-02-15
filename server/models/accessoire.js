const mongoose = require("mongoose");

const accessories = mongoose.Schema(
	{
		title: String,
		image: Array,
		ref: String,
		discription: String,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Accessories", accessories);
