import React, { useState, useContext } from "react";
import conversations from "../data/conversations";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allMessages, setAllMessages] = useState([]);

  const addNewMessage = (newMsg) => {
    let messages = [...allMessages];
    messages.push(newMsg);

    if (newMsg.sender === "user") {
      messages.push(conversations(newMsg.content));
    }

    // if (newMsg.text === "Order cheque book") {
    //   messages.push();
    // } else if (newMsg.text === "Savings Account") {
    //   messages.push({
    //     type: "card",
    //     text: "",
    //     sender: "bot",
    //   });
    // }
    setAllMessages(messages);
  };

  return (
    <AppContext.Provider
      value={{
        allMessages,
        addNewMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
