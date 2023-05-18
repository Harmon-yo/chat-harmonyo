import React from "react";
import { Grid, ListItem, ListItemText } from "@mui/material";
import { Timestamp } from "firebase/firestore";

export default function CaixaMensagem(props) {
  var posicao = "left";

  if (props.idEnviou === Number(sessionStorage.getItem("idUsuario"))) {
    posicao = "right";
  }
  var data;
  if (props.timestamp !== null) {
    data = new Timestamp(
      props.timestamp.seconds,
      props.timestamp.nanoseconds
    ).toDate();
  }else{
    console.log(props)
    data = new Date();
  }

  const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
  const minuto =
    data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
  const horario = hora + ":" + minuto;

  if (posicao === "left") {
    return (
      <ListItem key={props.key} style={{ maxWidth: "50%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              backgroundColor: "lightgray",
              maxWidth: "fit-content",
              padding: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderEndStartRadius: "2px",
              borderStartStartRadius: "16px",
              borderStartEndRadius: "16px",
              borderEndEndRadius: "16px",
            }}
          >
            <ListItemText
              align="left"
              primary={props.texto}
              style={{
                wordWrap: "break-word",
                width: "fit-content",
              }}
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText align="left" secondary={horario}></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        key={props.key}
        style={{ maxWidth: "50%", alignSelf: "flex-end" }}
      >
        <Grid
          container
          style={{
            justifyContent: "flex-end",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              backgroundColor: "#6ddb94",
              maxWidth: "fit-content",
              padding: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderEndStartRadius: "16px",
              borderStartStartRadius: "16px",
              borderStartEndRadius: "16px",
              borderEndEndRadius: "2px",
            }}
          >
            <ListItemText
              align="left"
              primary={props.texto}
              style={{
                wordWrap: "break-word",
                width: "fit-content",
              }}
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText align="right" secondary={horario}></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    );
  }
}
