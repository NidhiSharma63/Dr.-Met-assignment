import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppContext } from "../../Provider/AppProvider";
import ResearchData from "../../constant/ResearchData.json";

const TopicComponent = () => {
  const { setSelectedComponent, selectedComponent } = useAppContext();
  const handleClickOnResearch = (id) => {
    const selectedComponent = ResearchData.find((paper) => paper.id === id);
    setSelectedComponent(selectedComponent);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {ResearchData.map((paper) => {
        return (
          <Box
            onClick={() => handleClickOnResearch(paper.id)}
            sx={{
              padding: "15px",
              paddingLeft: "30px",
              cursor: "pointer",
              backgroundColor: selectedComponent?.id === paper.id ? "#31333E" : "transparent",
              "&:hover": {
                backgroundColor: "#31333E",
              },
            }}>
            <Typography color={"#C6C6C7"}> {paper.name}</Typography>
            <Typography color="#979797" sx={{ marginTop: "5px", fontSize: "12px" }}>
              {" "}
              Id -{paper.id}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default TopicComponent;
