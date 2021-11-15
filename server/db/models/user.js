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
  googleId: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  hash: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  resetToken: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  expireToken: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
});

module.exports = User;
