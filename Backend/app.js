const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello from the backend API!');
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
