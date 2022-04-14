const mongoose = require("mongoose");
const Devit = require("../models/devit");
const nodemailer = require("nodemailer");

module.exports = {
	add_devit: async (req, res) => {
		try {
			let devit = req.body;
			const saveddevit = await Devit.create(devit);
			// res.send(saveddevit);
			let smpTransport = nodemailer.createTransport({
				service: "Gmail",
				port: 465,
				auth: {
					user: "all.in.one.customer.services@gmail.com",
					pass: "Aladin123+",
				},
			});
			let machinesList = devit.machines.map(
				(machine) => `<li>${machine}</li>`
			);
			let mailOption = {
				from: "all.in.one.customer.services@gmail.com",
				to: "wael.ajabi@hotmail.fr",
				subject: "Demmande de devis",
				html: `<h3>Information du client</h3>
				<ul>
				<li>
					<span>nom et prenom: <span/>${devit.nom}
				</li>
				<li>
					<span>E-mail: <span/>${devit.email}
				</li>
				<li>
					<span>Mobile: <span/>${devit.mobile}
				</li>
				<li>
					<span>Addresse: <span/>${devit.address}
				</li>
				<li>
					<span>Domaine d'activité: <span/>${devit.domaine}
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
			const saveddevit = await Devit.insertMany(devit);
			res.send(saveddevit);
		} catch (error) {
			res.send(error);
		}
	},
	find_one_devit: async (req, res) => {
		try {
			let id = req.params._id;
			const devit = await Devit.findById(id);
			res.send(devit);
		} catch (error) {
			res.send(error);
		}
	},
	find_many_devit: async (req, res) => {
		try {
			let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
			const devit = await Devit.find({
				_id: { $in: ids },
			});
			res.send(devit);
		} catch (error) {
			res.send(error);
		}
	},
	find_all_devit: async (req, res) => {
		try {
			const devit = await Devit.find();
			res.send(devit);
		} catch (error) {
			res.send(error);
		}
	},
	update_one_devit: async (req, res) => {
		try {
			let devit = req.body;
			let id = req.params._id;
			const updateddevit = await Devit.findByIdAndUpdate(id, devit);
			res.send(updateddevit);
		} catch (error) {
			res.send(error);
		}
	},
	delete_one_devit: async (req, res) => {
		try {
			let id = req.params._id;
			const deleteddevit = await Devit.findByIdAndRemove(id);
			res.send(deleteddevit);
		} catch (error) {
			res.send(error);
		}
	},
};
