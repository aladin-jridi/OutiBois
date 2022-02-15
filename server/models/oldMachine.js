const mongoose = require("mongoose");

const oldMachine = mongoose.Schema(
	{
		title: String,
		image: Array,
		ref: String,
		discription: String,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("OldMachine", oldMachine);
