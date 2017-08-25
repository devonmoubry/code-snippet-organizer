const mongoose = require('mongoose');
const Snippet = require('./models/snippet.js');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/snippets');
// Snippet.create({title: '',
//   body: '',
//   notes: '',
//   language: '',
//   tags: ['', '', '']})
//   .then(function () {
//     console.log('hell yeah');
//   })
//   .catch(function () {
//     console.log('boo');
//   });
process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
