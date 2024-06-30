const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, required: true, index: true },
    mobile: { type: String, required: true },
    status: { type: String, enums: ["ACTIVE", "INACTIVE"], default: "ACTIVE" },
    password: { type: String, required: true },
    salt: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
