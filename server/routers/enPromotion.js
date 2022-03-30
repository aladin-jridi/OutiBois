const express = require("express");
const enPromotion = require("../controllers/enPromotion");
const router = express.Router();

router.route("/add").post(enPromotion.add_enPromotion);

router.route("/addMany").post(enPromotion.add_many_enPromotion);

router.route("/findOne").get(enPromotion.find_one_enPromotion);

router.route("/findMany").get(enPromotion.add_many_enPromotion);

router.route("/updateOne/:_id").put(enPromotion.update_one_enPromotion);

router.route("/deleteOne/:_id").delete(enPromotion.delete_one_enPromotion);

router.route("/findAll").get(enPromotion.find_all_enPromotion);

module.exports = router;
