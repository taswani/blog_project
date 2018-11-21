const mongoose = require("mongoose"); //MongoDB requirement
const { Schema } = mongoose; //To create schemas from mongoose

//Search Model
const PostSchema = new Schema({
  title: String,
  text: String
});

const Post = mongoose.model("Post", PostSchema);

module.exports.Post = Post;
