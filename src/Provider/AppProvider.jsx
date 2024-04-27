import { createContext, useContext, useState } from "react";
const AppContext = createContext({
  name: "", // Provide a default or initial value
  setName: () => {}, // Provide an empty function
});

const AppProvider = ({ children }) => {
  const [name, setName] = useState("World");
  const value = {
    name,
    setName,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
