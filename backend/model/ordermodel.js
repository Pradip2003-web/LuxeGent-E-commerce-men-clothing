const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        productName: String,
        quantity: Number,
        price: Number,
      },
    ],

    shippingAddress: {
      address: String,
      city: String,
      state: String,
      zipCode: String,
    },

    paymentMethod: {
      type: String,
      enum: ["card", "upi", "cod"],
      required: true,
    },

    paymentDetails: {
      cardNumber: String,
      cardExpiry: String,
      cardCvc: String,
      upiId: String,
    },

    shippingCost: Number,
    subtotal: Number,
    tax: Number,
    total: Number,

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    status: {
      type: String,
      default: "Processing",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Order", orderSchema);
