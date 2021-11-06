const app = require("./index");

const connect = require("./config/db");

app.listen(3000, async function () {
  await connect();
  console.log("listen to 3000");
});
