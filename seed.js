const { db } = require("./server/db/db");
// const Donor = require("./server/db/donor");
// const BloodType = require("./server/db/bloodType");
const { Donor } = require("./server/db/models");
const { BloodType } = require("./server/db/models");
const { User } = require("./server/db/models");

const seed = async () => {
  // console.log("what is wrong?");
  await db.sync({ force: true });
  const person = {
    name: "Don Johnson",
    address: "123 Broadway Street, apt 5R",
    medicalHistory: "healthy, paternal history of arthritis",
  };
  const blood = {
    bloodGroup: "O negative",
    bloodQuantity: "250 ml",
    bloodBank: "True blood LLC, 999 Hell street, apt 666",
  };
  await User.sync({ force: true });
  await Donor.sync({ force: true });
  await BloodType.sync({ force: true });
  const person1 = await Donor.create(person);
  const blood1 = await BloodType.create(blood);
  //   console.log(Object.keys(person1.__proto__));
  await person1.setBlood_type(blood1);
  db.close();
  console.log("seeeded successfully");
};

seed();
