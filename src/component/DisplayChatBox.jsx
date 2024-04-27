import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SendIcon from "@mui/icons-material/Send";
import { Box, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import UserData from ".././constant/UserData.json";
const DisplayChatBox = ({ drawerWidth, firstDrawerWidth }) => {
  console.log(UserData);

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
          <Typography color="white">{UserData[0].name}</Typography>
          <Typography
            sx={{
              textAlign: "center",
              top: "13px",
              position: "relative",
              backgroundColor: "#191B22",
              width: "100px",
              left: "40%",
              color: "#979797",
            }}>
            Today
          </Typography>
          <Divider color="#979797" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {UserData[0].chats.map((chat) => {
            return (
              <Box
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
                      backgroundColor: "black",
                      padding: "10px",
                      borderRadius: "50%",
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      alignContent: "center",
                    }}>
                    <img src="plus.png" className="plus-icon" />
                  </Box>
                )}
                <Typography
                  sx={{
                    background: chat.boat ? "#32375A" : "#292C3A",
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
                  <Box sx={{ height: "40px", width: "40px", borderRadius: "50%", backgroundColor: "#292C3A" }} />
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
                backgroundColor: "#31333E",
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
            <IconButton sx={{ backgroundColor: "#2E334E", marginLeft: "10px", padding: "15px" }}>
              <KeyboardVoiceIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DisplayChatBox;
