const express = require("express");
const mongoose = require("mongoose");
const port = 8000;

const db = {
	database:
		"mongodb+srv://root:root@kidkod.xmqil.mongodb.net/kidkok?retryWrites=true&w=majority" ||
		"mongodb://localhost/kidkod",
	secret: "mysecret",
};

/******************** Mongoose ********************/
mongoose.Promise = global.Promise;
mongoose
	.connect(db.database)
	.then((res) => console.log("mongoose connected !"));

/******************** Middleware ********************/
let app = express();
// Midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const accessoire = require("./routers/accessoire");
const newMachine = require("./routers/newMachine");
const oldMachine = require("./routers/oldMachine");


app.use("/api/accessoire", accessoire);
app.use("/api/newMachine", newMachine);
app.use("/api/oldMachine", oldMachine);







app.listen(port, () => {
	console.log(`listening on port http://localhost:${port} !`);
});