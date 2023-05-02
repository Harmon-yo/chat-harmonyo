
import { ListItemText } from "@mui/material";
import React from "react";

export default function DivisorDate(props) {
  return (
    <div style={{width: "90%", alignSelf: "center", height: "fit-content"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <div style={{width: "100%", height: "1px", backgroundColor: "#BDBDBD"}}></div>
            <div style={{width: "fit-content", height: "fit-content", backgroundColor: "#ffffff", padding: "0 8px"}}>
                <ListItemText style={{color:"#6b6666"}} primary={props.data}/>
                </div>
            <div style={{width: "100%", height: "1px", backgroundColor: "#BDBDBD"}}></div>
            
        </div>
    </div>
  );
}
