import React, { useState, useContext } from "react";
import conversations from "../data/conversations";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [showInit, setShowInit] = useState(true);

  const addNewMessage = (newMsg) => {
    let messages = [...allMessages];
    console.log("context---->>>>>> ", newMsg);
    messages.push(newMsg);

    if (newMsg.sender === "user") {
      messages.push(conversations(newMsg.content));
    }

    setAllMessages(messages);
  };

  const hideInit = () => {
    setShowInit(false);
  };

  return (
    <AppContext.Provider
      value={{
        allMessages,
        addNewMessage,
        hideInit,
        showInit,
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
