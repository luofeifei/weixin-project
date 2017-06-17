// 用户表

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  openid: {type:String,required:'必填'},
  createdAt: {type:Date,required:'必填'},
  conversationCount: {type:Number,default:0}
});

mongoose.model('User', UserSchema);

