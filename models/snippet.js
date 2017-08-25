const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  body: { type: String, required: true, unique: true },
  notes: String,
  language: { type: String, required: true, unique: true },
  tags: [String]
})

const Snippet = mongoose.model('Snippet', snippetSchema);

module.exports = Snippet;
