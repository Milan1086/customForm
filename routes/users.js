const express = require("express");
const router = express.Router();

const { addUser, getForm } = require("../controllers/users");

router.get("/form", getForm);
router.post("/add", addUser);

module.exports = router;
