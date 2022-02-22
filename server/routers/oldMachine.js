const express = require("express");
const oldMachine = require("../controllers/oldMachine");
const router = express.Router();

router.route("/addOldMachine").post(oldMachine.add_oldMachine);

router.route('/findOnenOldMachine').get(oldMachine.find_one_oldMachine);

router.route('/findManyoldMachine').get(oldMachine.add_many_oldMachine);

router.route('/updateOnenOldMachine/:_id').put(oldMachine.update_one_oldMachine);

router.route('/deleteOnenOldMachine/:_id').delete(oldMachine.delete_one_oldMachine);


module.exports = router;