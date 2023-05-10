import React from "react";

import {
  ListItem,
  Avatar,
  Typography,
  ListItemIcon,
  Divider,
} from "@mui/material";

export default function ProfileChat() {
  return (
    <>
      <ListItem className="chat-profile">
        <ListItemIcon>
          <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemIcon>
        <Typography variant="h6" component="div">
          Nome do Usuário
        </Typography>
      </ListItem>
      <Divider/>
    </>
  );
}
