const express = require('express');
const cors = require('cors');
const { Message } = require('./models');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/messages', async (req, res, next) => {
  try {
    const messages = await Message.find({});

    res.send({
      data: messages,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = app;
