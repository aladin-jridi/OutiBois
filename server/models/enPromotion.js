const mongoose = require("mongoose");

const enPromotion = mongoose.Schema(
  {
    name: String,
    image: Array,
    discription: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("EnPromotion", enPromotion);
