const express = require("express");
const app = express();
require("dotenv").config();
global.express = express;

// const router = require("./Routes/index");

// app.use("/", (req, res, next) => {
//   res.send("Welcome to the default server page, current status is running");
// });

app.use("/api", require("./Routes/index"));

const PORT = process.env.PORT;
console.log("PORT ==", PORT);

app.listen(PORT, () => {
  console.log("Server running on PORT ", PORT);
});
