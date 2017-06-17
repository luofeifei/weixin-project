var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ConversationSchema = new Schema({
  user: {type:Schema.ObjectId,ref:'User',required:'必填'},
  question: {type:String,required:'必填'},
  answer: {type:String,default:0},
  createdAt:{type:Date,required:'必填'}
});

mongoose.model('Conversation', ConversationSchema);
