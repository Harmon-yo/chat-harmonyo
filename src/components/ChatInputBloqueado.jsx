import React from 'react'
import { chat } from "../styles/Chat.Styles.js";

function ChatInputBloqueado(props) {
  return (
    <div style={chat().backgroundBloqueado}>
      <p style={chat().textoBloqueado}>Sua conversa com {props.nome} está bloqueada por motivo de denúncia. Por favor, caso você entenda que algo está errado, entre em contato com o nosso suporte.</p>
    </div>
  )
}

export default ChatInputBloqueado
