const express = require("express");
const accessoire = require("../controllers/accessoire");
const router = express.Router();

router.route("/add").post(accessoire.add_accessories);

router.route("/addMany").post(accessoire.add_many_accessories);

router.route("/findOne").get(accessoire.find_one_accessories);

router.route("/findMany").get(accessoire.add_many_accessories);

router.route("/updateOne/:_id").put(accessoire.update_one_accessories);

router.route("/deleteOne/:_id").delete(accessoire.delete_one_accessories);

router.route("/findAll").get(accessoire.find_all_accessories);

module.exports = router;
