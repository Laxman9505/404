const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  locationId: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
