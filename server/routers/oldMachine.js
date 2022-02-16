const express = require("express");
const oldMachine = require("../controllers/oldMachine");
const router = express.Router();

router.route("/addOldMachine").post(oldMachine.add_oldMachine);
router.route('/findOnenOldMachine').get(oldMachine.find_one_oldMachine);
router.route('/updateOnenOldMachine').put(oldMachine.update_one_oldMachine);
router.route('/deleteOnenOldMachine').delete(oldMachine.delete_one_oldMachine);


module.exports = router;