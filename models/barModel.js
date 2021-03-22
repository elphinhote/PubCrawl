const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  reviewlink: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  overall: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  // savedBy:{
  //   type:
  // }
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;
