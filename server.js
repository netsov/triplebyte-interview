const express = require('express');

const app = express();
const port = 3001;

app.get('/cards', (req, res) => {
  return res.status(200).json([]);
});

app.post('/cards', (req, res) => {
  return res.status(201);
});

app.put('/cards', (req, res) => {
  return res.status(200);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
