var express = require('express');
var eventProcessor = require('./event-processor');

var app = express();

// Handle GET requests to "/"
app.get('/', function (req, res) {
  res.send('Hello :)');
});

// Handle POST requests to "/"
app.post('/', function (req, res) {
  // Send the entire request body to the event processor.
  eventProcessor.process(req.body);

  // This 202 response is intentially non-committal,
  // and merely implies that further processing may occur.
  res.status(202).end();
});

// Start the web server.
app.listen(3000, function () {
  console.log('Server running on localhost:3000');
  console.log('Try posting some data to http://localhost:3000/')
});
