const mongoose = require("mongoose");
const devit = require("../models/accessoire");

module.exports = {
	add_devit: async (req, res) => {
		try {
			let devit = req.body;
			const saveddevit = await devit.create(devit);
			res.send(saveddevit);
		} catch (error) {
			res.send(error);
		}
	},
	add_many_devit: async (req, res) => {
		try {
			let devit = req.body.devit;
			const saveddevit = await devit.insertMany(devit);
			res.send(saveddevit);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_devit: async (req, res) => {
		try {
			let id = req.params._id;
			const devit = await devit.findById(id);
			res.send(devit);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_devit: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const devit = await devit.find({
				_id: { $in: ids },
			});
			res.send(devit);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_devit: async (req, res) => {
		try {
			const devit = await devit.find();
			res.send(devit);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_devit: async (req, res) => {
		try {
			let devit = req.body;
			let id = req.params._id;
			const updateddevit = await devit.findByIdAndUpdate(
				id,
				devit
			);
			res.send(updateddevit);
		} catch (error) {
			res.send(error);
		}
	},
	delete_one_devit: async (req, res) => {
		try {
			let id = req.params._id;
			const deleteddevit = await devit.findByIdAndRemove(id);
			res.send(deleteddevit);
		} catch (error) {
			res.send(error);
		}
	},
};
