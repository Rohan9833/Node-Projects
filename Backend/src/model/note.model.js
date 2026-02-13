const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    Title: String,
    Description: String
});

const noteModel = mongoose.model("note",noteSchema);

module.exports = noteModel