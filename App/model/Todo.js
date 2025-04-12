const mongoose = require("mongoose");

// Define the schema with timestamps
const TodoSchema = new mongoose.Schema(
  {
    task:{
      type: String,
      required: true,
      trim: true,
    },
    description:{
      type: String,
      required: true,
    },
    isCompleted:{
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create and export the model
const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
