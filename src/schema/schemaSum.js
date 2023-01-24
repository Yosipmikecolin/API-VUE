const { Schema, model } = require("mongoose");

const sumSchema = Schema({
  num1: Number,
  num2: Number,
  result: Number,
});

const sumModel = model("sums", sumSchema);
module.exports = sumModel;
