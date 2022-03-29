import './App.css';
import React, { useEffect, useState } from 'react';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';

export const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (messageText) => {
    setMessages([...messages, { author: 'Slava', text: messageText }]);
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === 'Slava') {
      setMessages([
        ...messages,
        { author: 'Robot', text: 'Your message was sent' },
      ]);
    }
  }, [messages]);

  return (
    <div className="App">
      {messages.map((message) => (
        <Message author={message.author} message={message.text} />
      ))}
      <Form onSubmit={addMessage} />
    </div>
  );
};
