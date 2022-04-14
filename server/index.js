const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;
const db = {
  database:
    // "mongodb+srv://root:root@kidkod.xmqil.mongodb.net/kidkok?retryWrites=true&w=majority" ||
    "mongodb://localhost/outiBois",
  secret: "mysecret",
};

/******************** Mongoose ********************/
mongoose.Promise = global.Promise;
mongoose
  .connect(db.database)
  .then((res) => console.log("mongoose connected !"));

/******************** Middleware ********************/
let app = express();
app.use(cors({ credentials: true, sameSite: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, sameSite: true }));
const accessoire = require("./routers/accessoire");
const newMachine = require("./routers/newMachine");
const oldMachine = require("./routers/oldMachine");
const enPromotion = require("./routers/enPromotion");
const devit = require("./routers/devit");

app.use("/api/accessoire", accessoire);
app.use("/api/newMachine", newMachine);
app.use("/api/oldMachine", oldMachine);
app.use("/api/enPromotion", enPromotion);
app.use("/api/devit", devit);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port} !`);
});
