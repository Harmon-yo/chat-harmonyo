import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  withStyles,
  Divider,
} from "@mui/material";
import React from "react";
import "../css/chat.css";
import { marcarMensagemComoLida } from "../services/db";
import { Timestamp } from "firebase/firestore";
import { formatHour, fromDateToFormatDate, fromTimestampToFormatHour, fromTimestampToFormatDate } from "../services/utils";

export default function ChatItem(props) {
  const [lida, setLida] = React.useState(props.lida);

  function handleClick() {
    props.onClick();
    setLida(true);
    marcarMensagemComoLida(props.id);
  }

  var data = new Timestamp(
    props.timestamp.seconds,
    props.timestamp.nanoseconds
  ).toDate();

  var hoje = new Date();


  const isToday =
    data.getDate() == hoje.getDate() &&
    data.getMonth() == hoje.getMonth() &&
    data.getFullYear() == hoje.getFullYear();

  const dataFormatada = fromTimestampToFormatDate(props.timestamp);
  const horario = fromTimestampToFormatHour(props.timestamp);


  return (
    <>
      <ListItem button onClick={handleClick} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.src} />
        </ListItemAvatar>
        <ListItemText
          primary={props.nome}
          secondary={
            <React.Fragment>
              <div className="ultima-mensagem">{props.ultimaMensagem}</div>
            </React.Fragment>
          }
        />
        <ListItemText
          primary={
            <React.Fragment>
              <div className="dataNotificacao">
                <div className="tempo">{isToday ? horario : dataFormatada}</div>
                <div className="notificacao">
                  {lida ? "" : <div className="notificacao-numero">1 </div>}
                </div>
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" />
    </>
  );
}
