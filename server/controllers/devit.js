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
			let machinesList = devit.machines.map(
				(machine) => `<li>${machine}</li>`
			);
			let mailOption = {
				from: "all.in.one.customer.services@gmail.com",
				to: "belguesmisakr@gmail.com",
				subject: "Demmande de devis",
				html: `<h3>Information du client</h3>
				<ul>
				<li>
					<span>nom et prenom: <span/>${devit.client.nom}
				</li>
				<li>
					<span>E-mail: <span/>${devit.client.email}
				</li>
				<li>
					<span>Mobile: <span/>${devit.client.mobile}
				</li>
				<li>
					<span>Addresse: <span/>${devit.client.address}
				</li>
				<li>
					<span>Domaine d'activité: <span/>${devit.client.domaine}
				</li>
				</ul>
				<br/>
				<h3>Articles Demmandés</h3>
				<ul>
				${machinesList}
				</ul>
          		<h3>Le client est en attent d'une devis pour les article listés</h3>`,
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
