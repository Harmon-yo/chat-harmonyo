import React, { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import CaixaMensagem from "./CaixaMensagem";
import ChatInput from "./ChatInput";
import {
  CircularProgress,
} from "@mui/material";
import db from "../services/firebase";
import DivisorDate from "./DivisorDate";
import { enviarMensagem, fromDateToFormatDate, fromTimestampToFormatDate } from "../services/utils";
import MessagesContainer from "./MessagesContainer";


export default function ChatContainer(props) {

  

    return (
      <>
        <ChatHeader src={props.src} nome={props.nome} />
        <MessagesContainer id={props.id} />
        <ChatInput
          value={props.valueInput}
          onChange={props.onChange}
          onClick={() => {
            props.onClick();
            enviarMensagem(props.valueInput, props.id)
          }}
        />
      </>
    );
  
}
