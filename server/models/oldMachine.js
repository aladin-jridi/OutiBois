const mongoose = require("mongoose");

const oldMachine = mongoose.Schema(
	{
		name: String,
		image: Array,
		discription: String,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("OldMachine", oldMachine);
