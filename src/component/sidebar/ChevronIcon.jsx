import { IconButton } from "@mui/material";
import React from "react";

import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const ChevronIcon = ({ handleClickOnChveronIcon, drawerWidth }) => {
  return (
    <IconButton
      onClick={handleClickOnChveronIcon}
      sx={{
        position: "absolute",
        top: "350px",
        left: drawerWidth === 300 ? "360px" : "80px",
        zIndex: 9999,
        backgroundColor: "#31333E",
      }}>
      {drawerWidth === 300 ? (
        <ChevronLeftOutlinedIcon data-testid="ChevronLeftOutlinedIcon" sx={{ fontSize: "16px" }} />
      ) : (
        <ChevronRightOutlinedIcon data-testid="ChevronRightOutlinedIcon" sx={{ fontSize: "16px" }} />
      )}
    </IconButton>
  );
};

export default ChevronIcon;
