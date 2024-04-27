import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./Provider/AppProvider";
import Layout from "./component/Layout";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <AppProvider>
      <ThemeProvider theme={darkTheme}>
        <Layout />
        <ToastContainer theme="dark" />
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
