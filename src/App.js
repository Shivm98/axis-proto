import Chatbot from "./layout/Chatbot/Chatbot";
import { AppProvider } from "../src/context/context";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Chatbot />
      </AppProvider>
    </div>
  );
}

export default App;
