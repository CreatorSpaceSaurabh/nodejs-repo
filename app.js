const express = require("express");
const app = express();
require("dotenv").config();
global.express = express;

// Mongo connection
const mongoInstance = require("./config/mongo.config");
mongoInstance.connect();

// APIs path
app.use("/api", require("./Routes/index"));

const PORT = process.env.PORT;
console.log("PORT ==", PORT);

app.listen(PORT, () => {
  console.log("Server running on PORT ", PORT);
});
