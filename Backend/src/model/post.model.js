const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    image: String,
    caption: String
});

const postmodel = mongoose.model("post",PostSchema);

module.exports = postmodel;