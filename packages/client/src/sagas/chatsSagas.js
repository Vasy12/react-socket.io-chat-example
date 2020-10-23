import { put } from 'redux-saga/effects';

import * as API from './../api';
import {
  getMessagesRequest,
  getMessagesRequestError,
  getMessagesRequestSuccess,
} from './../actions/chatActionCreators';

export function* sendMessageSaga(action) {
  API.sendMessage(action.payload.data);
}

export function* getMessagesSaga() {
  yield put(getMessagesRequest());
  try {
    const { data } = yield API.getMessages();
    yield put(getMessagesRequestSuccess(data));
  } catch (err) {
    yield put(getMessagesRequestError(err));
  }
}
