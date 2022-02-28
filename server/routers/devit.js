const express = require("express");
const devit = require("../controllers/devit");
const router = express.Router();

router.route("/adddevit").post(devit.add_devit);

router.route('/addMany').post(devit.add_many_devit);

router.route('/findOnedevit').get(devit.find_one_devit);

router.route('/findManydevit').get(devit.add_many_devit);

router.route('/updateOnedevit/:_id').put(devit.update_one_devit);

router.route('/deleteOnedevit/:_id').delete(devit.delete_one_devit);



module.exports = router;