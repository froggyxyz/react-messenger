import { List } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { ChatItem } from '../ChatItem/ChatItem';

const chats = [
  {
    id: 'chat1',
    avatarURL: 'user/img/1',
    name: 'John Doe',
    text: 'Hello! How are you?',
  },
  {
    id: 'chat2',
    avatarURL: 'user/img/2',
    name: 'Foo Bar',
    text: 'This msg 4 u!',
  },
  {
    id: 'chat3',
    avatarURL: 'user/img/3',
    name: 'Boss',
    text: `Hey! Wake up! You're late!!!`,
  },
];

export const ChatsList = () => (
  <>
    <List>
      {chats.map((chat) => (
        <Link to={`/chat/${chat.id}`}>
          <ChatItem
            avatar={chat.avatarURL}
            name={chat.name}
            text={chat.text}
            key={Math.random()}
          />
        </Link>
      ))}
    </List>
    <Outlet />
  </>
);
