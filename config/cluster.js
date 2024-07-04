const express = require("express"),
  app = express(),
  http = require("http"),
  cors = require("cors"),
  os = require("os"),
  cluster = require("cluster"),
  bodyParser = require("body-parser");

require("dotenv").config();

let numCpus = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process with pid ${process.pid} is running`);
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
    // console.log(`Worker process is running with pid ${process.pid}`);
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker process down = pid ${worker.process.pid}`);
    cluster.fork();
  });
} else {
  // Mongo connection
  const mongoInstance = require("./mongo.config");
  mongoInstance.connect();
  app.use(bodyParser.json({ limit: "50mb" }));
  let corsOptions = {
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));
  let server = http.createServer(app);
  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
}
