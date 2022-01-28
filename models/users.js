const mongoose = require("mongoose");
const db = require("../config/db");

const formSchema = new mongoose.Schema(
  {},
  {
    collection: "Forms",
    strict: false,
  }
);

const Forms = db.model("Forms", formSchema);

module.exports = Forms;
