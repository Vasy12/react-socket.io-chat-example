const { Schema, model } = require('mongoose');

const roles = ['owner', 'admin', 'member'];

const chatMemberSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  role: {
    type: String,
    enum: roles,
  },
});
const chatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  participants: [chatMemberSchema],
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;
