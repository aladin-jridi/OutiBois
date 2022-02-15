const mongoose = require("mongoose");

const newMachine = mongoose.Schema(
	{
		title: String,
		image: Array,
		ref: String,
		discription: String,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("NewMachine", newMachine);
