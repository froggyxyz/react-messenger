import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Form } from '../../components/Form/Form';
import { MessageList } from '../../components/MessageList/MessageList';
import { AUTHORS } from '../../utils/constants';

const initMessages = {
  chat1: [],
  chat2: [],
  chat3: [],
};

export const Chat = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState(initMessages);

  const addMessage = (newMessage) => {
    setMessages({ ...messages, [id]: [...messages[id], newMessage] });
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
    let lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
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

  if (!messages[id]) return <Navigate to="/chat" replace />;

  return (
    <div className="App">
      <div className="messageList">
        <MessageList messages={messages[id]} />
        <Form className="form" onSubmit={sendMessage} />
      </div>
    </div>
  );
};
