const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./data/data");

const app = express();

//SETTINGS
app.set("port", 4000);

//MIDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/app-vue", require("./routes/sum.routes"));

//SERVER
app.listen(app.get("port"), () => {
  console.log("SERVER RUNNING ON PORT:", app.get("port"));
});
