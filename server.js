'use strict';

const express = require('express'),
      routes = require('./src/backend/routes/index.js'),
      mongoose = require('mongoose');

const app = express();
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

routes(app);
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Node.js is listening on port: ${PORT}...`);
});
