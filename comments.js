// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create web server
const app = express();
// Add middlewares
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());
// Create a default response
const comments = [
  {username: 'alice', text: 'Hello, world!'},
  {username: 'bob', text: 'Hi, there!'},
];
// Add a route
app.get('/comments', (req, res) => {
  const max = req.query.max;
  res.send(comments.slice(0, max));
});
// Add a new route
app.post('/comments', (req, res) => {
  const comment = req.body;
  console.log(comment);
  comments.push(comment);
  res.send(comment);
});
// Start the server
app.listen(4001, () => {
  console.log('Listening on http://localhost:4001/');
});