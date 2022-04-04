import './Form.css';
import React, { useEffect, useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        className="field"
        id="filled-basic"
        variant="filled"
        type="text"
        onChange={changeValue}
        value={value}
        placeholder="Enter your message"
        inputRef={inputRef}
      />
      <Button className="btn" variant="contained" type="submit">
        Send
      </Button>
    </form>
  );
};
