import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home/Home';
import { Profile } from './screens/Profile/Profile';
import { Chat } from './screens/Chat/Chat';
import { ChatsList } from './components/ChatsList/ChatsList';

export const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/chat">Chats</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<ChatsList />}>
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
