var express = require('express');

var app = express();

app.post('/', function (req, res) {
  // Send the entire request body to the event processor.
  eventProcessor.process(req.body);

  // This 202 response is intentially non-committal,
  // and merely implies that further processing may occur.
  res.status(202).end();
});

app.listen(3000);
