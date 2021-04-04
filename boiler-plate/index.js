const express = require("express");
const app = express();
const port = 8444;
const config = require("./config/key");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());

// mongo db 연결
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongo connect...!'))
  .catch(err => console.log(err));

// get요청이 올경우 /에서 응답해줄 내용
app.get('/', (req, res) => res.send('<h1>Welcome!!</h1><p>This is <mark>kermit</mark> World!!</p>'));

// post요청이 올경우(회원가입)
app.post('/register', (req, res) => {
  // 회원가입할때 필요한 정보들을 client에서 가져오면
  // 가져온 데이터를 DB에 저장한다.
  
  // userSchema 인스턴스 생성
  // 인자로 요청값의 body(post)값을 전달
  const user = new User(req.body);
  
  // 전달받은 값을 DB에 저장
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err});
    
    return res.status(200).json({
      success: true,
    });
  });
});


// express서버 실행
app.listen(port, () => {
  console.log(`start kermit server on ${port} port!`)
  console.log(`내일도 출근!`);
});


