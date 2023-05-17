import React, { useEffect, useState } from "react";
import "react-chat-elements/dist/main.css";
import { chat } from "../styles/Chat.Styles.js";
import "../css/chat.css";
import db from "../services/firebase";
import ChatItem from "../components/ChatItem";
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
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
  const [contador, setContador] = useState(0);
  const [nomeChat, setNomeChat] = useState("");
  const [srcChat, setSrcChat] = useState("");
  const [chats, setChats] = useState([]);
  const [carregouConversas, setCarregouConversas] = useState(false);

  sessionStorage.setItem("idUsuario", 1);
  sessionStorage.setItem("tipo", "aluno");

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
              sessionStorage.tipo == "aluno"
                ? doc.data().nomeProfessor
                : doc.data().nomeAluno,
            src:
              sessionStorage.tipo == "aluno"
                ? doc.data().srcProfessor
                : doc.data().srcAluno,
            ultimaMensagem: doc.data().ultimaMensagem,
            lida: doc.data().lida,
            timestamp: doc.data().timestamp,
          },
        }))
      );
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
                    setActiveChat(chat.id);
                    setNomeChat(chat.data.nome);
                    setSrcChat(chat.data.src);
                    setMessages([]);
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
                    valueInput={inputValue}
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
