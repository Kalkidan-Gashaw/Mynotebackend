const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  userId: { type: String, required: true },
  createdOn: { type: Date, default: new Date().getTime() },
  isFavorite: { type: Boolean, default: false }, // Added isFavorite field
  reminderTime: { type: Date, default: null }, // Field to store reminder time
  reminderTriggered: { type: Boolean, default: false }, // Field to track if reminder has been triggered
});

module.exports = mongoose.model("Note", noteSchema);
