import { Box } from "@mui/material";
import React from "react";

const TopicComponent = () => {
  return (
    <Box sx={{ paddingTop: "15px", paddingLeft: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
      TOPIC
      {/* {UserData.map((user) => {
        return (
          <Box sx={{}}>
            <Typography color={"#C6C6C7"}> {user.name}</Typography>
            <Typography color="#979797" sx={{ marginTop: "5px", fontSize: "12px" }}>
              {" "}
              Id -{user.id}
            </Typography>
          </Box>
        );
      })} */}
    </Box>
  );
};

export default TopicComponent;
