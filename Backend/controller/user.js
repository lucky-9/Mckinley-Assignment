const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: "user not found in DataBase",
      });
    }
    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  return res.json(req.profile);
};

exports.getUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err || !users) {
      return res.json({
        error: "error getting users",
      });
    }
    res.json(users);
  });
};
