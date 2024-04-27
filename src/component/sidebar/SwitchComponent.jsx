import { Box, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useAppContext } from "../../Provider/AppProvider";
import ResearchData from "../../constant/ResearchData.json";
import UserData from "../../constant/UserData.json";
const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#536AE0",
        "& + .MuiSwitch-track": {
          backgroundColor: "#EDEDED",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "#536AE0",
        // color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
      color: "#536AE0",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#EDEDED",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  })
);

const SwitchComponent = () => {
  const { setDarkThemeEnabled, setSelectedComponent } = useAppContext();
  const handleClick = (event) => {
    // console.log(event.target.checked);
    if (event.target.checked) {
      setDarkThemeEnabled(true);
      setSelectedComponent(UserData[0]);
    } else {
      setDarkThemeEnabled(false);
      setSelectedComponent(ResearchData[0]);
    }
  };
  return (
    <Box
      sx={{
        alignSelf: "flex-end",
        padding: "20px",
        paddingLeft: "8px",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignContent: "center",
      }}>
      <Typography fontSize={"9px"}>Mode 1</Typography>
      <IOSSwitch
        sx={{ mariginTop: 5, mariginBottom: 5, rotate: "270deg", marginLeft: "-8px" }}
        defaultChecked
        onClick={handleClick}
      />
      <Typography fontSize={"9px"}>Mode 2</Typography>
    </Box>
  );
};

export default SwitchComponent;
