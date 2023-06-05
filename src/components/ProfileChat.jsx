import React from "react";

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
        <ListItem button sx={chat().voltar}>
          <ArrowBackIcon  sx={chat().setaVoltar}/>
        </ListItem>
        <ListItemIcon>
          <Avatar src={sessionStorage.src}/>
        </ListItemIcon>
        <Typography variant="h6" component="div">
          {sessionStorage.nomeUsuario}
        </Typography>
      </ListItem>
    </>
  );
}
