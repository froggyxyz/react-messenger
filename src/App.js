import './App.css';
import React, { useEffect, useState } from 'react';
import { AUTHORS } from './utils/constants';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form';
import { ChatsList } from './components/ChatsList/ChatsList';

const chatsObj = [
  {
    id: 1,
    avatarURL: 'user/img/1',
    name: 'John Doe',
    text: 'Hello! How are you?',
  },
  { id: 2, avatarURL: 'user/img/2', name: 'Foo Bar', text: 'This msg 4 u!' },
  {
    id: 3,
    avatarURL: 'user/img/3',
    name: 'Boss',
    text: `Hey! Wake up! You're late!!!`,
  },
];

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState(chatsObj);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Math.random()}`,
    });
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === 'Slava') {
      timeout = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: 'Message was sent',
          id: `msg-${Math.random()}`,
        });
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  return (
    <div className="App">
      <ChatsList chats={chats} />
      <div className="messageList">
        <MessageList messages={messages} />
        <Form className="form" onSubmit={sendMessage} />
      </div>
    </div>
  );
};
