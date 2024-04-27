import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import SideBar from "./component/SideBar";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      // primary: {
      //   main: "#1A1C25",
      // },
      // secondary: {
      //   main: "#1B1C21",
      // },
      // info: {
      //   main: "#393B48",
      // },
      // lightBlue: {
      //   main: "#32375A",
      // },
      // lightGrey: {
      //   main: "#2A2D3B",
      // },
      // // used
      // sideBar: {
      //   main: "#222431",
      // },
      // avatar: {
      //   main: "#363946",
      // },
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <SideBar />
    </ThemeProvider>
  );
};

export default App;
