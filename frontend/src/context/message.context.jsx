import { createContext, useState } from "react";

export const MessageContext = createContext();

const MessageContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  const [currentMessage, setcurrentMessage] = useState(second);
  return (
    <MessageContext.Provider
      value={{
        loading,
        setLoading,
        allMessages,
        setAllMessages,
        currentMessage,
        setcurrentMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
