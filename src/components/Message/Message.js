import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';

export const Message = ({ author, text }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={author} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText primary={author} secondary={text} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
