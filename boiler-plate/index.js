const express = require('express');
const app = express();
const port = 8444;

app.get('/', (req, res) => res.send('<h1>Welcome!!</h1><p>This is <mark>kermit</mark> World!!</p>'));

app.listen(port, () => {
  console.log(`start kermit server on ${port} port!`)
  console.log(`Let's go!!`);
});