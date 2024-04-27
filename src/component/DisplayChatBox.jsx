import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SendIcon from "@mui/icons-material/Send";
import { Box, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../Provider/AppProvider";
const DisplayChatBox = () => {
  const { selectedComponent, darkThemeEnabled } = useAppContext();

  return (
    <>
      <Box
        sx={{
          marginLeft: "100px",
          //   height: "88vh",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          //   justifyContent: "flex-end",
          height: "100%",
        }}>
        <Box>
          <Typography color={darkThemeEnabled ? "white" : "black"}>{selectedComponent?.name}</Typography>
          <Typography
            sx={{
              textAlign: "center",
              top: "13px",
              position: "relative",
              backgroundColor: darkThemeEnabled ? "#1B1C21" : "#EEF0F9",
              width: "100px",
              left: "40%",
              color: "#979797",
            }}>
            Today
          </Typography>
          <Divider color="#979797" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {selectedComponent?.chats.map((chat, i) => {
            return (
              <Box
                key={i}
                sx={{
                  alignSelf: chat.boat ? "flex-start" : "flex-end",
                  //   border: "1px solid red",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}>
                {chat.boat && (
                  <Box
                    sx={{
                      backgroundColor: darkThemeEnabled ? "#32375A" : "black",
                      padding: "10px",
                      borderRadius: "50%",
                      height: "40px",
                      width: "40px",
                      display: "flex",
                      alignContent: "center",
                    }}>
                    <img src="plus.png" className="rotating-image" />
                  </Box>
                )}
                <Typography
                  sx={{
                    background: chat.boat
                      ? darkThemeEnabled
                        ? "#32375A"
                        : "#9CA1C8"
                      : darkThemeEnabled
                      ? "#292C3A"
                      : "#33385B",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "500px",
                    fontSize: "12px",
                    color: chat.boat ? "white" : "#A5A7B7",
                    borderBottomRightRadius: chat.boat ? "10px" : "0px",
                    borderBottomLeftRadius: chat.boat ? "0px" : "10px",
                  }}>
                  {chat.user || chat.boat}
                </Typography>
                {chat.user && (
                  <Box
                    sx={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      backgroundColor: darkThemeEnabled ? "#292C3A" : "#33385B",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", height: "100%", alignItems: "flex-end" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <TextField
              sx={{
                width: "90%",
                borderRadius: "10px",
                backgroundColor: darkThemeEnabled ? "#31333E" : "#D8DAE4",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  height: "42px",

                  legend: {
                    marginLeft: "30px",
                  },
                },
                "& .MuiInputBase-input": {
                  fontSize: "12px",
                  borderRadius: "10px",
                },
              }}
              placeholder="Type your message here"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ paddingLef: "5px" }}>
                    <SendIcon sx={{ fontSize: "18px" }} />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton
              sx={{ backgroundColor: darkThemeEnabled ? "#2E334E" : "#D8DAE4", marginLeft: "10px", padding: "15px" }}>
              <KeyboardVoiceIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DisplayChatBox;
