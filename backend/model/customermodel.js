const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      default: null,
    },

    name: {
      type: String,
    },

    email: {
      type: String,
    },

    phone: {
      type: String,
    },

    orders: {
      type: Number,
      default: 0,
    },

    spent: {
      type: Number,
      default: 0,
    },

    joined: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("customer", customerSchema);
