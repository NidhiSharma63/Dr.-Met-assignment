import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../Provider/AppProvider";
import UserData from "../../constant/UserData.json";

const UserComponent = () => {
  const { setSelectedComponent, selectedComponent } = useAppContext();
  const handleClickOnUser = (id) => {
    const selectedComponent = UserData.find((user) => user.id === id);
    setSelectedComponent(selectedComponent);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {UserData.map((user) => {
        return (
          <Box
            key={user.id}
            onClick={() => handleClickOnUser(user.id)}
            sx={{
              padding: "15px",
              paddingLeft: "30px",
              cursor: "pointer",
              backgroundColor: selectedComponent?.id === user.id ? "#31333E" : "transparent",
              "&:hover": {
                backgroundColor: "#31333E",
              },
            }}>
            <Typography color={"#C6C6C7"}> {user.name}</Typography>
            <Typography color="#979797" sx={{ marginTop: "5px", fontSize: "12px" }}>
              {" "}
              Id -{user.id}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default UserComponent;
