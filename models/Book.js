const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    max: 40
  },
  author: {
    type: String,
    required: true,
    max: 40
  }
});

module.exports = Book = mongoose.model('book', BookSchema);
