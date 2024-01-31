import * as React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import "./Notification.css"

//porps numero de notificação
export default function NotificationBell(props) {
  return (
    <div className='notificacao'>
      <IconButton className='notificacao'
        size="large"
        aria-label="show new notifications"
        color="inherit"
      >
        <Badge badgeContent={props.value} color="error" className='notificacao'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
