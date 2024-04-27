import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./Provider/AppProvider";
import SideBar from "./component/SideBar";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <AppProvider>
      <ThemeProvider theme={darkTheme}>
        <SideBar />
        <ToastContainer theme="dark" />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
