import React from "react";
import {
  CircularProgress,
  Fab,
  Grid,
  TextField,
  InputBase,
} from "@mui/material";
import Send from "@mui/icons-material/Send";

export default function ChatInput(props) {
  return (
    <Grid container style={{ padding: "20px" }}>
      <Grid item xs={11}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Insira aqui a sua mensagem"
          fullWidth
          multiline
          rows={2}
          onChangeCapture={(e) => props.onChange(e.target.value)}
          value={props.value}
          style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
        />
      </Grid>
      <Grid xs={1} align="right">
        <Fab color="rgba(29, 185, 84, 0.25)" aria-label="add">
          <Send onClick={()=> props.onClick()} />
        </Fab>
      </Grid>
    </Grid>
  );
}
