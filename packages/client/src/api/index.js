import io from 'socket.io-client';
import { newMessage, sendMessageError } from '../actions/chatActionCreators';
import store from '../store';

const wsBaseUrl = 'ws://192.168.1.148:5000';

const httpBaseUrl = 'http://192.168.1.148:5000/api';

const CHAT_EVENT = {
  NEW_MESSAGE: 'NEW_MESSAGE',
  NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR',
};

const socket = io(wsBaseUrl);

socket.on(CHAT_EVENT.NEW_MESSAGE, data => {
  const parsedData = JSON.parse(data);
  store.dispatch(newMessage(parsedData));
});

socket.on(CHAT_EVENT.NEW_MESSAGE_ERROR, err => {
  const parsedError = JSON.parse(err);
  store.dispatch(sendMessageError(parsedError));
});

export const sendMessage = data =>
  socket.emit(CHAT_EVENT.NEW_MESSAGE, JSON.stringify(data));

export const getMessages = () =>
  fetch(`${httpBaseUrl}/messages`).then(response => response.json());
