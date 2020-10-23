import { combineReducers } from 'redux';
import chatsReducer from './chatsReducer';

const rootReduce = combineReducers({
  chats: chatsReducer,
});

export default rootReduce;
