import db from "../services/firebase";
import { collection, query, where, or, onSnapshot } from 'firebase/firestore';


export const marcarMensagemComoLida = (id) => {
    db.collection("chats").doc(id).update({lida: true});
}


