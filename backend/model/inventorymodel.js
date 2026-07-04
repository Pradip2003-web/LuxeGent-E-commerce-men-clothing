var mongoose = require("mongoose");
const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  sku: {
    type: String,
  },
  category: {
    type: String,
  },
  stock: {
    type: Number,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("inventory", inventorySchema);
