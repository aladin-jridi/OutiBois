const express = require("express");
const newMachine = require("../controllers/newMachine");
const router = express.Router();

router.route("/addNewMachine").post(newMachine.add_newMachine);

router.route('/findOnenNewMachine').get(newMachine.find_one_newMachine);

router.route('/findManynewMachine').get(newMachine.add_many_newMachine);

router.route('/updateOnenNewMachine/:_id').put(newMachine.update_one_newMachine);

router.route('/deleteOnenNewMachine/:_id').delete(newMachine.delete_one_newMachine);


module.exports = router;