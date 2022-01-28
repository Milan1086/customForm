const Forms = require("../models/users");

const addUser = async (req, res) => {
  const addUser = await Forms.create(req.body);
  res.send({ msg: "New user added successfully!", data: addUser, status: 200 });
};

const getForm = (req, res) => {
  res.render("form");
};

module.exports = {
  addUser,
  getForm,
};
