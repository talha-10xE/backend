const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  cats_today: { type: Number, required: true, default: 0 },
  dogs_today: { type: Number, required: true, default: 0 },
  cats_lifetime: { type: Number, required: true, default: 0 },
  dogs_lifetime: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Counter", counterSchema, "data"); 
// "data" is the collection name in your DB
