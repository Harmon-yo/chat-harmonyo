import React, { useEffect, useState } from "react";
import "react-chat-elements/dist/main.css";
import { chat } from "../styles/Chat.Styles.js";
import "../css/chat.css";
import db from "../services/firebase";
import {
  Box,
  CircularProgress,
} from "@mui/material";
import {
  query,
  collection,
  where,
  onSnapshot,
  or,
  orderBy,
} from "firebase/firestore";
import ChatContainer from "../components/ChatContainer";
import ProfileChat from "../components/ProfileChat";
import ChatList from "../components/ChatList";

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [nomeChat, setNomeChat] = useState("");
  const [srcChat, setSrcChat] = useState("");
  const [chats, setChats] = useState([]);
  const [bloqueado, setBloqueado] = useState(false)
  const [carregouConversas, setCarregouConversas] = useState(false);
  const [idUsuarioConversa, setIdUsuarioConversa] = useState(0)

  sessionStorage.setItem("idUsuario", 1);
  sessionStorage.setItem("tipo", "aluno");
  sessionStorage.setItem("nomeUsuario", "Vinícius")


  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      or(
        where("idProfessor", "==", Number(sessionStorage.idUsuario)),
        where("idAluno", "==", Number(sessionStorage.idUsuario))
      ),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChats("");
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: {
            idAluno: doc.data().idAluno,
            idProfessor: doc.data().idProfessor,
            nome:
              sessionStorage.tipo === "aluno"
                ? doc.data().nomeProfessor
                : doc.data().nomeAluno,
            src:
              sessionStorage.tipo === "aluno"
                ? doc.data().srcProfessor
                : doc.data().srcAluno,
            ultimaMensagem: doc.data().ultimaMensagem,
            lida: doc.data().lida,
            timestamp: doc.data().timestamp,
            bloqueado: doc.data().bloqueado
          },
        }))
        
      );
      sessionStorage.tipo === "aluno"
      ? sessionStorage.src = snapshot.docs[0].data().srcAluno
      : sessionStorage.src = snapshot.docs[0].data().srcProfessor
   
    });

    setCarregouConversas(true);
    return () => unsubscribe();
  }, []);

  if (carregouConversas) {
    return (
      <>
        <Box sx={chat().chatPage}>
          <Box sx={chat().chatContainer}>
            <Box sx={chat().chatLeft}>
              <ProfileChat />

              <Box sx={chat().chatListContainer}>
                <ChatList
                  onChatClick={(chat) => {
                    
                    if(sessionStorage.tipo === "aluno"){
                      setIdUsuarioConversa(chat.data.idProfessor)
                    }else{
                      setIdUsuarioConversa(chat.data.idAluno)
                    }

                    setActiveChat(chat.id);
                    setNomeChat(chat.data.nome);
                    setSrcChat(chat.data.src);
                    setMessages([]);
                    setBloqueado(chat.data.bloqueado)
                  }}
                />
              </Box>
            </Box>
            <Box sx={chat().messageContainer}>
              {activeChat ? (
                <>
                  <ChatContainer
                    id={activeChat}
                    src={srcChat}
                    nome={nomeChat}
                    isBloqueado={bloqueado}
                    valueInput={inputValue}
                    idUsuarioConversa = {idUsuarioConversa}
                    onChange={(e) => setInputValue(e)}
                    onClick={() => setInputValue("")}
                  />
                </>
              ) : (
                <Box sx={chat().emptyChat}>
                  <p>Olá! Seja bem vindo ao chat</p>
                  <p>Clique em algum chat para começar a conversar</p>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </>
    );
  } else {
    return <CircularProgress color="success"/>;
  }
};

export default Chat;
