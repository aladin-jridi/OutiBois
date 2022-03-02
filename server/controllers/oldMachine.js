const mongoose = require("mongoose");
const OldMachine = require("../models/oldMachine");

module.exports = {
	add_oldMachine: async (req, res) => {
		try {
			let oldMachine = req.body;
			const savedoldMachine = await OldMachine.create(oldMachine);
			res.send(savedoldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_oldMachine: async (req, res) => {
		try {
			let oldMachine = req.body.oldMachine;
			const savedoldMachine = await OldMachine.insertMany(oldMachine);
			res.send(savedoldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_oldMachine: async (req, res) => {
		try {
			let id = req.params._id;
			const oldMachine = await OldMachine.findById(id);
			res.send(oldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_oldMachine: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const oldMachine = await OldMachine.find({
				_id: { $in: ids },
			});
			res.send(oldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_oldMachine: async (req, res) => {
		try {
			const oldMachine = await OldMachine.find();
			res.send(oldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_oldMachine: async (req, res) => {
		try {
			let oldMachine = req.body;
			let id = req.params._id;
			const updatedoldMachine = await OldMachine.findByIdAndUpdate(
				id,
				oldMachine
			);
			res.send(updatedoldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	delete_one_oldMachine: async (req, res) => {
		try {
			let id = req.params._id;
			const deletedoldMachine = await OldMachine.findByIdAndRemove(id);
			res.send(deletedoldMachine);
		} catch (error) {
			res.send(error);
		}
	},
};
