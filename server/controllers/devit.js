const mongoose = require("mongoose");
const devit = require("../models/accessoire");
const nodemailer = require("nodemailer");

module.exports = {
	add_devit: async (req, res) => {
		try {
			let devit = req.body;
			console.log(devit.client.email);
			// const saveddevit = await devit.create(devit);
			// res.send(saveddevit);
			let smpTransport = nodemailer.createTransport({
				service: "Gmail",
				port: 465,
				auth: {
					user: "all.in.one.customer.services@gmail.com",
					pass: "Azerty123+",
				},
			});
			let mailOption = {
				from: "all.in.one.customer.services@gmail.com",
				to: devit.client.email,
				subject: "welcome to UnitedPets",
				html: `<h3>thank you for chose our application UnitedPets </h3>
                
          <h3>you can conct us phone : 50915806 </h3> <br/><h3>or our eamil :unitedpetsofficial@yahoo.com</h3>`,
			};
			smpTransport.sendMail(mailOption, (err, response) => {
				if (err) {
					res.send(err);
				} else {
					res.send("success");
				}
			});
			smpTransport.close();
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
			const updateddevit = await devit.findByIdAndUpdate(id, devit);
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
