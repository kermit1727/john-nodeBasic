const express = require("express");
const app = express();
const port = 8444;
const config = require("./config/key");
const mongoose = require("mongoose");

// mongo db 연결
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongo connect...!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('<h1>Welcome!!</h1><p>This is <mark>kermit</mark> World!!</p>'));

app.listen(port, () => {
  console.log(`start kermit server on ${port} port!`)
  console.log(`Let's go!!`);
});