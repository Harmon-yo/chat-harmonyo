import React, { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import CaixaMensagem from "./CaixaMensagem";
import ChatInput from "./ChatInput";
import {
  CircularProgress,
  Fab,
  Grid,
  TextField,
  InputBase,
} from "@mui/material";
import { collection, query, onSnapshot } from "firebase/firestore";
import db from "../services/firebase";
import { Timestamp } from "firebase/firestore";
import DivisorDate from "./DivisorDate";
import { fromDateToFormatDate, fromTimestampToFormatDate } from "../services/utils";

export default function ChatContainer(props) {
  const [mensagens, setMensagens] = React.useState([]);
  const [carregouMensagens, setCarregouMensagens] = React.useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const unsubscribe = db
      .doc(`chats/${props.id}`)
      .collection("mensagens")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMensagens([]);
        snapshot.docs.map((doc) => {
          setMensagens((mensagens) => [
            ...mensagens,
            {
              id: doc.id,
              idEnviou: doc.data().idEnviou,
              texto: doc.data().texto,
              timestamp: doc.data().timestamp,
            },
          ]);
        });
        setCarregouMensagens(true);
      });

    console.log(mensagens);

    return () => unsubscribe();
  }, [props.id]);

  var contador = 0;
  var ultimaData = "";
  const enviarMensagem = async (mensagem) => {
    const idEnviou = Number(sessionStorage.getItem("idUsuario"));
    const agora = new Date();
    const timestamp = Timestamp.fromDate(agora);
    const texto = mensagem;

    await db.doc(`chats/${props.id}`).collection("mensagens").add({
      idEnviou,
      timestamp,
      texto,
    });
    db.collection("chats").doc(props.id).update({
      ultimaMensagem: texto,
      lida: false,
      timestamp: timestamp,
    });
  };

  if (!carregouMensagens) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <>
        <ChatHeader src={props.srcChat} nome={props.nome} />
        <div ref={ref} id="scroll" className="message-box-container">
          {mensagens.map((mensagem) => {
            
           if(contador == 0 || ultimaData != fromTimestampToFormatDate(mensagem.timestamp)){
            contador++;
            ultimaData = fromTimestampToFormatDate(mensagem.timestamp)
            var dataExibir = "";
            if(fromTimestampToFormatDate(mensagem.timestamp) == fromDateToFormatDate(new Date())){
              dataExibir = "Hoje"
            }else if(fromTimestampToFormatDate(mensagem.timestamp) == fromDateToFormatDate(new Date(new Date().setDate(new Date().getDate() - 1)))){
              dataExibir = "Ontem"
            }else{
              dataExibir = fromTimestampToFormatDate(mensagem.timestamp)
            }
            return (
              <>
                <DivisorDate
                  data={dataExibir}
                />
                <CaixaMensagem
                  key={mensagem.id}
                  id={mensagem.id}
                  idEnviou={mensagem.idEnviou}
                  texto={mensagem.texto}
                  timestamp={mensagem.timestamp}
                />
              </>
            );
            }
           
            var dataMensagemFormatada = fromTimestampToFormatDate(mensagem.timestamp)
            var dataAtualFormatada = fromDateToFormatDate(new Date())


              console.log("mensagem: " + mensagem.texto)
              console.log("data msg: " + dataMensagemFormatada)
              console.log("data: " + dataAtualFormatada)

                
              return (
                <CaixaMensagem
                  key={mensagem.id}
                  id={mensagem.id}
                  idEnviou={mensagem.idEnviou}
                  texto={mensagem.texto}
                  timestamp={mensagem.timestamp}
                />
              );
            
          })}
        </div>
        <ChatInput
          value={props.valueInput}
          onChange={props.onChange}
          onClick={() => {
            props.onClick();
            enviarMensagem(props.valueInput);
          }}
        />
      </>
    );
  }
}
