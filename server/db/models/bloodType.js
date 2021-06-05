const Sequelize = require("sequelize");
const { db } = require("../db");

const BloodType = db.define("blood_type", {
  bloodGroup: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  bloodQuantity: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  bloodBank: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = BloodType;
