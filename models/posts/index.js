var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: String,
    date: { type: Date, default: Date.now },
    likes: Number

  });

module.exports = mongoose.model('Blog', blogSchema);  