const mongoose = require("mongoose");
const NewMachine = require("../models/newMachine");

module.exports = {
	add_newMachine: async (req, res) => {
		try {
			let newMachine = req.body;
			const savednewMachine = await NewMachine.create(newMachine);
			res.send(savednewMachine);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_newMachine: async (req, res) => {
		try {
			let newMachine = req.body.newMachine;
			const savednewMachine = await NewMachine.insertMany(newMachine);
			res.send(savednewMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_newMachine: async (req, res) => {
		try {
			let id = req.params._id;
			const newMachine = await NewMachine.findById(id);
			res.send(newMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_newMachine: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const newMachine = await NewMachine.find({
				_id: { $in: ids },
			});
			res.send(newMachine);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_newMachine: async (req, res) => {
		try {
			const newMachine = await NewMachine.find();
			res.send(newMachine);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_newMachine: async (req, res) => {
		try {
			let newMachine = req.body;
			let id = req.params._id;
			const updatednewMachine = await NewMachine.findByIdAndUpdate(
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
			console.log(id);

			const deletednewMachine = await NewMachine.findByIdAndRemove(id);
			res.send(deletednewMachine);
		} catch (error) {
			res.send(error);
		}
	},
};
