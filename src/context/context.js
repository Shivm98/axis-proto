import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [allMessages, setAllMessages] = useState([
    {
      text: "hello",
      sender: "bot",
    },
    {
      text: "bye",
      sender: "user",
    },
  ]);

  const addNewMessage = (newMsg) => {
    setAllMessages([...allMessages, { ...newMsg }]);
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
