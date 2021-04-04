const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number,
  },
});


// 해닫코드가 실행되야 스키마가 등록된다.
// 첫번째 인자 -> 컬렉션이름, 소문자치환 후 복수형으로 변환(User -> users)
// 두번째 인자 -> 등록할 스키마
// 세번째 인자 -> 첫번째 경우가 싫다면 여기에 사용할 이름 직접등록!
const User = mongoose.model('User', userSchema);

module.exports = {User};