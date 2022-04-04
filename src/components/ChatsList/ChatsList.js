import { List } from '@mui/material';
import { Chat } from '../Chat/Chat';

export const ChatsList = ({ chats }) => (
  <List>
    {chats.map((chat) => (
      <Chat avatar={chat.avatarURL} name={chat.name} text={chat.text} />
    ))}
  </List>
);
