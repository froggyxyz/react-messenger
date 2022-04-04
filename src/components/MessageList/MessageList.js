import { List } from '@mui/material';
import { Message } from '../Message/Message';

export const MessageList = ({ messages }) => (
  <List>
    {messages.map((msg) => (
      <Message key={msg.id} text={msg.text} author={msg.author} />
    ))}
  </List>
);
