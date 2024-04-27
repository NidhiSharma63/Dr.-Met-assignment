import { createContext, useContext, useState } from "react";
import UserData from "../constant/UserData.json";
const AppContext = createContext({
  selectedComponent: {},
  setSelectedComponent: () => {},
  userComponentIsGettingDisplayed: true,
  setUserComponentIsGettingDisplayed: () => {},
});

const AppProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(UserData[0]);
  const [userComponentIsGettingDisplayed, setUserComponentIsGettingDisplayed] = useState(false);
  const value = {
    selectedComponent,
    setSelectedComponent,
    userComponentIsGettingDisplayed,
    setUserComponentIsGettingDisplayed,
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
