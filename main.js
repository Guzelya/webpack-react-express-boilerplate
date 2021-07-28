// const db = require('./server/db/_db');
const app = require("./server/server.js");

// const init = async () => {
//   // await db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
//   // console.log("db synced");
//   app.listen(3002, () => {
//     console.log(`server is on Port 3002`);
//   });
// };

// init();
// app.get("/", (res, req) => {
//   res.sed("what is it?");
// });

// just a note

app.listen(3002, () => {
  console.log("app is listening at port 3002");
});
