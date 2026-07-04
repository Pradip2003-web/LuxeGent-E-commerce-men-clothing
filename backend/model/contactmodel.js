var mongoose = require("mongoose");

const contacschema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});
module.exports = mongoose.model("contact", contacschema);
