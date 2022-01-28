const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    type: "application/x-www-form-urlencoded",
  })
);

const vPath = path.join(__dirname, "./views");

app.set("view engine", "hbs");
app.set("views", vPath);

const router = require("./routes/index");

app.use("/api", router);

app.listen(3001, () => console.log("Server running on port 3001!"));
