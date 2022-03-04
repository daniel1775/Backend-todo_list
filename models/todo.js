// Here our data model is created

const mongoose = require("mongoose");

// Here the data schema is created

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  deleted: Boolean
});

module.exports = mongoose.model("todos", TodoSchema);

