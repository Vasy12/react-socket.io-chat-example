import React, { useEffect, useRef } from 'react';
import MessageForm from './components/MessageForm'
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendMessage } from './actions/chatActionCreators';
import format from 'date-fns/format';
import './App.css';



function App() {
  const { messages, isFetching, error } = useSelector(state => state.chats);
  const listNode = useRef(null);
  const dispatch = useDispatch();

  const submitHandler = values => {
    dispatch(sendMessage(values));
  };

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  useEffect(() => {
    if (listNode.current) {
      listNode.current.scrollTo({
        top: listNode.current.scrollHeight,
        behaviour: 'smooth',
      });
    }
  }, [messages.length]);

  return (
    <>
      <ol ref={listNode} id="messagesList">
        {isFetching && <li>Loading messages...</li>}
        {messages.map(m => {
          return (
            <li key={m._id}>
              <article>
                <h3>{m.message}</h3>
                <footer>
                  <time time={m.createdAt}>
                    {format(new Date(m.createdAt), 'HH:mm')}
                  </time>
                </footer>
              </article>
            </li>
          );
        })}
      </ol>
      <MessageForm onSubmit={submitHandler} />
    </>
  );
}

export default App;
