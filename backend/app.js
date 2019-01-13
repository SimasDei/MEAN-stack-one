const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'aa123',
      title: 'First Server Side Post',
      content: 'I am a server side post, look at me !'
    },
    {
      id: 'adam',
      title: 'Second Server Side Post',
      content: ':( !'
    }
  ];
  res.status(200).json({
    message: "Got 'em",
    posts: posts
  });
});

module.exports = app;
