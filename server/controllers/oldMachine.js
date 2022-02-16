const mongoose = require("mongoose");
const oldMachine = require("../models/oldMachine");

module.exports = {
	add_oldMachine: async (req, res) => {
		try {
			let oldMachine = req.body;
			const savedoldMachine = await oldMachine.create(oldMachine);
			res.send(savedoldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_oldMachine: async (req, res) => {
		try {
			let oldMachine = req.body.oldMachine;
			const savedoldMachine = await oldMachine.insertMany(oldMachine);
			res.send(savedoldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_oldMachine: async (req, res) => {
		try {
			let id = req.params._id;
			const oldMachine = await oldMachine.findById(id);
			res.send(oldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_oldMachine: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const oldMachine = await oldMachine.find({
				_id: { $in: ids },
			});
			res.send(oldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_oldMachine: async (req, res) => {
		try {
			const oldMachine = await oldMachine.find();
			res.send(oldMachine);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_oldMachine: async (req, res) => {
		try {
			let oldMachine = req.body;
			let id = req.params._id;
			const updatedoldMachine = await oldMachine.findByIdAndUpdate(
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
			const deletedoldMachine = await oldMachine.findByIdAndRemove(id);
			res.send(deletedoldMachine);
		} catch (error) {
			res.send(error);
		}
	},
};
