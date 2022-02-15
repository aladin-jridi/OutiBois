const mongoose = require("mongoose");
const newMachine = require("../models/newMachine");

module.exports = {
	add_newMachine: async (req, res) => {
		try {
			let newMachine = req.body;
			const savednewMachine = await newMachine.create(newMachine);
			res.send(savednewMachine);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_newMachine: async (req, res) => {
		try {
			let newMachine = req.body.newMachine;
			const savednewMachine = await newMachine.insertMany(newMachine);
			res.send(savednewMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_newMachine: async (req, res) => {
		try {
			let id = req.params._id;
			const newMachine = await newMachine.findById(id);
			res.send(newMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_newMachine: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const newMachine = await newMachine.find({
				_id: { $in: ids },
			});
			res.send(newMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_newMachine: async (req, res) => {
		try {
			const newMachine = await newMachine.find();
			res.send(newMachine);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_newMachine: async (req, res) => {
		try {
			let newMachine = req.body;
			let id = req.params._id;
			const updatednewMachine = await newMachine.findByIdAndUpdate(
				id,
				newMachine
			);
			res.send(updatednewMachine);
		} catch (error) {
			res.send(error);
		}
	},
	delete_one_newMachine: async (req, res) => {
		try {
			let id = req.params._id;
			const deletednewMachine = await newMachine.findByIdAndRemove(id);
			res.send(deletednewMachine);
		} catch (error) {
			res.send(error);
		}
	},
};
