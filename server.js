'use strict';

var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello from Express' });
});

app.listen(PORT, () => {
  console.log(`Node.js is listening on port: ${PORT}...`);
});

