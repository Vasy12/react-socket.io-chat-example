import ACTION_TYPE from '../actions/actionTypes';
import produce from 'immer';
import createReducer from './helpers/createReducer';

const initialState = {
  messages: [],
  isFetching: false,
  error: null,
};

const handlers = {
  [ACTION_TYPE.GET_MESSAGES_REQUEST]: produce(draftState => {
    draftState.isFetching = true;
  }),
  [ACTION_TYPE.GET_MESSAGES_REQUEST_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { data },
    } = action;
    draftState.isFetching = false;
    draftState.messages = [...data, ...draftState.messages];
  }),
  [ACTION_TYPE.GET_MESSAGES_REQUEST_ERROR]: produce((draftState, action) => {
    const {
      payload: { error },
    } = action;

    draftState.isFetching = false;
    draftState.error = error;
  }),
  [ACTION_TYPE.NEW_MESSAGE_ACTION]: produce((draftState, action) => {
    const {
      payload: { data },
    } = action;
    draftState.messages.push(data);
  }),
};

const chatsReducer = createReducer(handlers, initialState);

export default chatsReducer;
