const express = require("express");
const newMachine = require("../controllers/newMachine");
const router = express.Router();

router.route("/add").post(newMachine.add_newMachine);

router.route("/findOnen").get(newMachine.find_one_newMachine);

router.route("/findMany").get(newMachine.add_many_newMachine);

router.route("/updateOne/:_id").put(newMachine.update_one_newMachine);

router.route("/deleteOne/:_id").delete(newMachine.delete_one_newMachine);

router.route("/findAll").get(newMachine.find_all_newMachine);

module.exports = router;
