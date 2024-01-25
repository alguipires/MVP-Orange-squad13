import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

//porps numero de notificação
export default function NotificationBell(props) {
  return (
    <IconButton
      size="large"
      aria-label="show new notifications"
      color="inherit"
    >
      <Badge badgeContent={props.value} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}
