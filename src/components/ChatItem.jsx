import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import React, { useEffect } from "react";
import { chat } from "../styles/Chat.Styles";
import "../css/chat.css";
import {
  marcarMensagemComoLida,
} from "../services/utils";
import { Timestamp } from "firebase/firestore";
import {
  fromTimestampToFormatHour,
  fromTimestampToFormatDate,
  fromDateToFormatDate,
} from "../services/utils";
import db from "../services/firebase";

export default function ChatItem(props) {
  const [lida, setLida] = React.useState(props.lida);
  const [qtdNaoLidas, setQtdNaoLidas] = React.useState(10);
  const [carregouNaoLidas, setCarregouNaoLidas] = React.useState(false);

  useEffect(() => {
    setCarregouNaoLidas(false);
    const unsubscribe = db
      .collection("chats")
      .doc(props.id)
      .collection("mensagens")
      .where("idEnviou", "!=", Number(sessionStorage.getItem("idUsuario")))
      .where("lida", "==", false)
      .onSnapshot((snapshot) => {
        setQtdNaoLidas(snapshot.docs.length);
        setCarregouNaoLidas(true);
      });
    if (carregouNaoLidas) {
      console.log(qtdNaoLidas);
    }
    return () => unsubscribe();
  }, [qtdNaoLidas]);

  function handleClick() {
    props.onClick();
    setLida(true);
    marcarMensagemComoLida(props.id);
  }
  
  
  var data = new Timestamp(
    props.timestamp?.seconds,
    props.timestamp?.nanoseconds
  ).toDate();

  var hoje = new Date();

  const isToday =
    data.getDate() === hoje.getDate() &&
    data.getMonth() === hoje.getMonth() &&
    data.getFullYear() === hoje.getFullYear();

  var dataFormatada = fromTimestampToFormatDate(props.timestamp);

  const horario = fromTimestampToFormatHour(props.timestamp);

  if (
    fromTimestampToFormatDate(props.timestamp) ===
    fromDateToFormatDate(new Date(new Date().setDate(new Date().getDate() - 1)))
  ) {
    dataFormatada = "Ontem";
  }

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        sx={chat().chatItem}
        >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.src} />
        </ListItemAvatar>
        <ListItemText
          primary={props.nome}
          secondary={
            <Box sx={chat().ultimaMensagem}>{props.ultimaMensagem}</Box>
          }
          style={{ width: "40%" }}
        />
        <ListItemText sx={chat().dataBox}>
          <Box sx={chat().dataNotificacao}>
            <Box sx={chat().tempo}>{isToday ? horario : dataFormatada}</Box>
            {qtdNaoLidas !== 0 ?  
            <Box sx={chat().notificacao}>
              <Box sx={chat().notificacaoNumero}>{qtdNaoLidas}</Box>
            </Box>
             : null}
           
          </Box>
        </ListItemText>
      </ListItem>
      <Divider variant="fullWidth" sx={chat().dividerChat}/>
    </>
  );
}
