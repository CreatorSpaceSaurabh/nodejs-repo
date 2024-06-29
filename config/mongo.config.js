const mongoose = require("mongoose");

const connect = async () => {
  try {
    const URI = process.env.URI;
    await mongoose
      .connect(URI)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  } catch (error) {
    throw new Error("Error while conenction with DB", error.message);
  }
};

module.exports = {
  connect,
};
