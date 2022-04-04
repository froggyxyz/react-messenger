import './Message.css';
import React from 'react';

export const Message = ({ author, message }) => {
  return (
    <div className="message">
      <div className="author">{author}</div>
      <div>{message}</div>
    </div>
  );
};
