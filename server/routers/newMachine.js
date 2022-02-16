const express = require("express");
const newMachine = require("../controllers/newMachine");
const router = express.Router();

router.route("/addNewMachine").post(newMachine.add_newMachine);
router.route('/findOnenNewMachine').get(newMachine.find_one_newMachine);
router.route('/updateOnenNewMachine').put(newMachine.update_one_newMachine);
router.route('/deleteOnenNewMachine').delete(newMachine.delete_one_newMachine);


module.exports = router;