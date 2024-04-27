import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
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
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
