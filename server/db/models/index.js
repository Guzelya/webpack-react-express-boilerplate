const Donor = require("./donor");
const BloodType = require("./bloodType");
const { db } = require("../db");

Donor.hasOne(BloodType);
BloodType.belongsTo(Donor);

module.exports = {
  Donor,
  BloodType,
  db,
};
