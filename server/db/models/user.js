const Sequelize = require("sequelize");
const { db } = require("../db");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
});

module.exports = User;
