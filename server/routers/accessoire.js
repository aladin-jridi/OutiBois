const express = require("express");
const accessoire = require("../controllers/accessoire");
const router = express.Router();

router.route("/addAccessories").post(accessoire.add_accessories);
// router.route('/addMany').post(accessoire.add_many_accessories);
router.route('/findOneAccessories').get(accessoire.find_one_accessories);
// router.route('/findManyAccessories').get(accessoire.add_many_accessories);
router.route('/updateOneAccessories').put(accessoire.update_one_accessories);
router.route('/deleteOneAccessories').delete(accessoire.delete_one_accessories);



module.exports = router;