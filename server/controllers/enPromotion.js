const mongoose = require("mongoose");
const EnPromotion = require("../models/enPromotion");

module.exports = {
  add_enPromotion: async (req, res) => {
    try {
      let enPromotion = req.body;
      const savedenPromotion = await EnPromotion.create(enPromotion);
      res.send(savedenPromotion);
    } catch (error) {
      res.send(error);
    }
  },
  add_many_enPromotion: async (req, res) => {
    try {
      let enPromotion = req.body.enPromotion;
      const savedenPromotion = await EnPromotion.insertMany(enPromotion);
      res.send(savedenPromotion);
    } catch (error) {
      res.send(error);
    }
  },
  find_one_enPromotion: async (req, res) => {
    try {
      let id = req.params._id;
      const enPromotion = await EnPromotion.findById(id);
      res.send(enPromotion);
    } catch (error) {
      res.send(error);
    }
  },
  find_many_enPromotion: async (req, res) => {
    try {
      let ids = req.body.ids.map((id) => mongoose.Types.ObjectId(id));
      const enPromotion = await EnPromotion.find({
        _id: { $in: ids },
      });
      res.send(enPromotion);
    } catch (error) {
      res.send(error);
    }
  },
  find_all_enPromotion: async (req, res) => {
    try {
      const enPromotion = await EnPromotion.find();
      res.send(enPromotion);
    } catch (error) {
      res.send(error);
    }
  },
  update_one_enPromotion: async (req, res) => {
    try {
      let enPromotion = req.body;
      let id = req.params._id;
      const updatedenPromotion = await EnPromotion.findByIdAndUpdate(
        id,
        enPromotion
      );
      res.send(updatedenPromotion);
    } catch (error) {
      res.send(error);
    }
  },
  delete_one_enPromotion: async (req, res) => {
    try {
      let id = req.params._id;
      const deletedenPromotion = await EnPromotion.findByIdAndRemove(id);
      res.send(deletedenPromotion);
    } catch (error) {
      res.send(error);
    }
  },
};
