const express = require("express");
const app = express();
require("dotenv").config();
global.express = express;
const redis = require("redis");

// Mongo connection
const mongoInstance = require("./config/mongo.config");
mongoInstance.connect();

// setup redis
let redisClient;
(async () => {
  redisClient = redis.createClient({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    //In order to turn off queuing commands and get an error if we couldn't connect to the redis server
    enable_offline_queue: false,
  });
  redisClient.on("error", (err) => {
    console.log("Rediss error ==", err);
  });
  await redisClient.connect();
})();

global.redisClient = redisClient;

// APIs path
app.use("/api", require("./Routes/index"));

const PORT = process.env.PORT;
console.log("PORT ==", PORT);

app.listen(PORT, () => {
  console.log("Server running on PORT ", PORT);
});
