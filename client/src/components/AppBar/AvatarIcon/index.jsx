import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// porops nameUser e uriImageUser
export default function AvatarIcon(props) {
  return <Avatar alt={props.nameUser} src={props.uriImageUser} />;
}
