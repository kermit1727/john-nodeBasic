const express = require('express');
const app = express();
const port = 8444;
const bodyParser = require('body-parser');
const config = require('./config/key');

const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

app.get('/', (req, res) => res.send('<h1>Hello kermit!</h1><p>어서오세요!!!!!</p><p><mark>kermit</mark> World!!!</p>'));

app.post('/register', (req, res) => {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  
  const user = new User(req.body);
  
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err});
    
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`start kermit server on port ${port}`));