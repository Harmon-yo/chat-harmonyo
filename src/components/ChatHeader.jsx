import React from "react";
import '../css/chat.css';
import { Divider, Grid, ListItem, ListItemIcon, ListItemText, TextField, Avatar, List } from "@mui/material";

export default function ChatHeader(props) {



  
    return (
        <>
          <Grid item xs={3} style={{borderRight: "500"}}>
                <List>
                    <ListItem key={props.nome}>
                        <ListItemIcon>
                        <Avatar alt={props.nome} src={props.src} />
                        </ListItemIcon>
                        <ListItemText primary={props.nome}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                </Grid>
        </>
    );
}