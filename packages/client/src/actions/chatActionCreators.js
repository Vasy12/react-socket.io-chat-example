import ACTION_TYPE from './actionTypes';

export const getMessages = () => ({
  type: ACTION_TYPE.GET_MESSAGES_ACTION,
});

export const getMessagesRequest = () => ({
  type: ACTION_TYPE.GET_MESSAGES_REQUEST,
});

export const getMessagesRequestError = err => ({
  type: ACTION_TYPE.GET_MESSAGES_REQUEST_ERROR,
  payload: {
    error: err,
  },
});

export const getMessagesRequestSuccess = data => ({
  type: ACTION_TYPE.GET_MESSAGES_REQUEST_SUCCESS,
  payload: {
    data,
  },
});

export const newMessage = data => ({
  type: ACTION_TYPE.NEW_MESSAGE_ACTION,
  payload: { data },
});

export const sendMessage = data => ({
  type: ACTION_TYPE.SEND_MESSAGE_ACTION,
  payload: {
    data,
  },
});

export const sendMessageError = err => ({
  type: ACTION_TYPE.SEND_MESSAGE_ERROR_ACTION,
  payload: {
    error: err,
  },
});
