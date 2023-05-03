import { Timestamp } from "firebase/firestore";
import db from "./firebase";

export function fromTimestampToFormatDate(timestamp) {
  var dataMensagem = new Timestamp(
    timestamp.seconds,
    timestamp.nanoseconds
  ).toDate();

  const dia =
    dataMensagem.getDate() < 10
      ? "0" + dataMensagem.getDate()
      : dataMensagem.getDate();
  const mes =
    dataMensagem.getMonth() < 10
      ? "0" + dataMensagem.getMonth()
      : dataMensagem.getMonth();

  var dataMensagemFormatada =
    dia + "/" + mes + "/" + dataMensagem.getFullYear();

  return dataMensagemFormatada;
}
export function fromDateToFormatDate(dataPassada) {
  var data = new Date(dataPassada);
  const dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
  const mes = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
  var dataFormatada = dia + "/" + mes + "/" + data.getFullYear();

  return dataFormatada;
}
export function fromTimestampToFormatHour(timestamp) {
  var data = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
  const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
  const minuto =
    data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
  var horaFormatada = hora + ":" + minuto;

  return horaFormatada;
}
export function enviarMensagem(mensagem, id) {
  const idEnviou = Number(sessionStorage.getItem("idUsuario"));
  const agora = new Date();
  const timestamp = Timestamp.fromDate(agora);
  const texto = mensagem;

  db.doc(`chats/${id}`)
    .collection("mensagens")
    .add({
      idEnviou,
      timestamp,
      texto,
      lida: false,
    })
    .then(() => {
      var objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
    });
  db.collection("chats").doc(id).update({
    ultimaMensagem: texto,
    timestamp: timestamp,
  });
}
export function marcarMensagemComoLida(id) {
  db.doc(`chats/${id}`)
    .collection("mensagens")
    .where("idEnviou", "!=", Number(sessionStorage.getItem("idUsuario")))
    .where("lida", "==", false)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.update({
          lida: true,
        });
      });
    });
}


