import './Form.css';
import React, { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="field"
        type="text"
        onChange={changeValue}
        value={value}
        placeholder="Enter your message"
      />
      <input className="btn" type="submit" value="Send" />
    </form>
  );
};
