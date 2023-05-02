import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import CaixaMensagem from "./components/CaixaMensagem";
import Chat from "./screens/Chat";


function App() {
  return (
    
    <div className="App">
        
      <Chat 
      />
      </div>
  );
}

export default App;
