import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import { enviarMensagem } from "../services/utils";
import MessagesContainer from "./MessagesContainer";


export default function ChatContainer(props) {



  return (
    <>
      <ChatHeader src={props.src} nome={props.nome} />
      <MessagesContainer id={props.id} />
      <ChatInput
        value={props.valueInput}
        onChange={props.onChange}
        onClick={() => {
          props.onClick();
          if (props.valueInput !== "") {
            enviarMensagem(props.valueInput, props.id)
          }
        }}
      />
    </>
  );

}
