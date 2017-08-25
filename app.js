const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Snippet = require('./models/snippet.js');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/snippets');

const app = express();
app.engine('mustache', mustacheExpress()); // Register '.mustache' extension with The Mustache Express
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({ extended: false }));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/signup', function (req, res) {
  res.render('signup');
})

app.get('/login', function (req, res) {
  res.render('login');
})

app.get('/create', function (req, res) {
  res.render('create');
})

app.get('/showAll', function (req, res) {
  Snippet.find()
  .then(function (snippets) {
    res.render('showAll', {snippets: snippets});
  })

})

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

app.listen(3000, function () {
  console.log('🍸  Party at http://localhost:3000...');
});

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
