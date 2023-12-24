const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone Number is required"],
    },
    query: {
      type: String,
      required: [true, "Query is required"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const formData = mongoose.model("formdata", formSchema);

module.exports = formData;
