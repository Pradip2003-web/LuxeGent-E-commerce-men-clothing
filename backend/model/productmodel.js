const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },

    shortDescription: String,

    description: String,

    category: String,

    brand: String,

    sku: String,

    mrp: Number,

    sellingPrice: Number,

    costPrice: Number,

    discount: Number,

    tax: Number,

    stock: Number,

    lowStock: Number,

    sizes: [String],

    color: String,

    image: [String],

    rating: {
      type: Number,
      default: 4.5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    badge: {
      type: String,
      default: "New",
    },

    status: {
      type: String,
      default: "Active",
    },

    metaTitle: String,

    metaDescription: String,

    keywords: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("product", productSchema);
