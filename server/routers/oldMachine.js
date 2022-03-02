const express = require("express");
const oldMachine = require("../controllers/oldMachine");
const router = express.Router();

router.route("/add").post(oldMachine.add_oldMachine);

router.route("/findOne").get(oldMachine.find_one_oldMachine);

router.route("/findMany").get(oldMachine.add_many_oldMachine);

router.route("/updateOne/:_id").put(oldMachine.update_one_oldMachine);

router.route("/deleteOne/:_id").delete(oldMachine.delete_one_oldMachine);

router.route("/findAll").get(oldMachine.find_all_oldMachine);

module.exports = router;
