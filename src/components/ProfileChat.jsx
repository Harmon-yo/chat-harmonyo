import React from "react";

import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  ListItem,
  Avatar,
  Typography,
  ListItemIcon,
} from "@mui/material";
import { chat } from "../styles/Chat.Styles";

export default function ProfileChat() {

  return (
    <>
      <ListItem sx={chat().chatProfile}>
        <ListItem sx={chat().voltar}>
          <ArrowBackIcon sx={chat().setaVoltar}/>
        </ListItem>
        <ListItemIcon>
          <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemIcon>
        <Typography variant="h6" component="div">
          Nome do Usuário
        </Typography>
      </ListItem>
    </>
  );
}
