import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';

export const ChatItem = ({ avatar, name, text }) => (
  <>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {name}:
            </Typography>
            {text}
          </>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
  </>
);
