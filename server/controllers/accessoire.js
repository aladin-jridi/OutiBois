const mongoose = require("mongoose");
const Accessories = require("../models/accessoire");

module.exports = {
  add_accessories: async (req, res) => {
    try {
      let accessories = req.body;
      const savedaccessories = await Accessories.create(accessories);
      res.send(savedaccessories);
    } catch (error) {
      res.send(error);
    }
  },
  add_many_accessories: async (req, res) => {
    try {
      let accessories = req.body.accessories;
      const savedaccessories = await Accessories.insertMany(accessories);
      res.send(savedaccessories);
    } catch (error) {
      res.send(error);
    }
  },
  find_one_accessories: async (req, res) => {
    try {
      let id = req.params._id;
      const accessories = await Accessories.findById(id);
      res.send(accessories);
    } catch (error) {
      res.send(error);
    }
  },
  find_many_accessories: async (req, res) => {
    try {
      let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
      const accessories = await Accessories.find({
        _id: { $in: ids },
      });
      res.send(accessories);
    } catch (error) {
      res.send(error);
    }
  },
  find_all_accessories: async (req, res) => {
    try {
      const accessories = await Accessories.find();
      res.send(accessories);
    } catch (error) {
      res.send(error);
    }
  },
  update_one_accessories: async (req, res) => {
    try {
      let accessories = req.body;
      let id = req.params._id;
      const updatedaccessories = await Accessories.findByIdAndUpdate(
        id,
        accessories
      );
      res.send(updatedaccessories);
    } catch (error) {
      res.send(error);
    }
  },
  delete_one_accessories: async (req, res) => {
    try {
      let id = req.params._id;
      const deletedaccessories = await Accessories.findByIdAndRemove(id);
      res.send(deletedaccessories);
    } catch (error) {
      res.send(error);
    }
  },
};
