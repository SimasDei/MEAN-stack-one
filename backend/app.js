const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First Niddleware');
  next();
});

app.use((req, res, next) => {
  res.send("I'm Express, look at me !");
});

module.exports = app;
