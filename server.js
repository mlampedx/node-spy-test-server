const express = require('express');
const nodeSpy = require('../../codesmith/nodeSpy/nodeSpy');

const app = express();
nodeSpy.server(3001);

app.get('/', nodeSpy.spy, (req, res, next) => {
  console.log('GET working');
  next();
}, nodeSpy.report);

app.listen(3000, () => {
  console.log('Connected to port 3000');
});

module.exports = app;