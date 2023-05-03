import React from "react";
import { Grid, ListItem, ListItemText } from "@mui/material";
import { Timestamp } from "firebase/firestore";
import { useEffect } from "react";

export default function CaixaMensagem(props) {
  var posicao = "left";
  
  if (props.idEnviou == Number(sessionStorage.getItem("idUsuario"))) {
    posicao = "right";
  }

  var data = new Timestamp(
    props.timestamp.seconds,
    props.timestamp.nanoseconds
  ).toDate();


    const hora = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
    const minuto = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
    const horario = hora + ":" + minuto;
  
   

  if (posicao == "left") {
    return (
      <ListItem key={props.key}>
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              backgroundColor: "#6ddb94",
              width: "min-content",
              maxWidth: "40%",
              padding: "8px",
              borderEndStartRadius: "2px",
              borderStartStartRadius: "20px",
              borderStartEndRadius: "20px",
              borderEndEndRadius: "20px",
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
      <ListItem key={props.key}>
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
              maxWidth: "40%",
              padding: "8px",
              borderEndStartRadius: "20px",
              borderStartStartRadius: "20px",
              borderStartEndRadius: "20px",
              borderEndEndRadius: "2px",
            }}
          >
            <ListItemText
              align="left"
              primary={props.texto}
              style={{
                wordWrap: "break-word",
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
