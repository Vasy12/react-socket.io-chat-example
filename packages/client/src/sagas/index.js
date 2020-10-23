import ACTION_TYPE from './../actions/actionTypes';
import * as ChatsSagas from './chatsSagas';
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPE.SEND_MESSAGE_ACTION, ChatsSagas.sendMessageSaga);
  yield takeLatest(ACTION_TYPE.GET_MESSAGES_ACTION, ChatsSagas.getMessagesSaga);
}
