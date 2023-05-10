import React, { useEffect, useState } from "react";
import "react-chat-elements/dist/main.css";
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
        <head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>
        <div className="chat-page">
          <div className="chat-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                overflowY: "auto",
                height: "max-content",
              }}
            >
              <ProfileChat />

              <div className="chat-list-container">
                <ChatList
                  onChatClick={(chat) => {
                    setActiveChat(chat.id);
                    setNomeChat(chat.data.nome);
                    setSrcChat(chat.data.src);
                    setMessages([]);
                  }}
                />
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="message-container">
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
                <div className="empty-chat">
                  <p>Olá! Seja bem vindo ao chat</p>
                  <p>Clique em algum chat para começar a conversar</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <CircularProgress color="success" />;
  }
};

export default Chat;
