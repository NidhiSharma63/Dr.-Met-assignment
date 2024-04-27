import AddIcon from "@mui/icons-material/Add";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Autocomplete,
  Avatar,
  IconButton,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../Provider/AppProvider";
import ResearchData from "../constant/ResearchData.json";
import { SIDE_BAR_ICONS } from "../constant/SideBarIcons";
import UserData from "../constant/UserData.json";
import DisplayChatBox from "./DisplayChatBox";
import ChevronIcon from "./sidebar/ChevronIcon";
import SwitchComponent from "./sidebar/SwitchComponent";
import TopicComponent from "./sidebar/TopicComponent";
import UserComponent from "./sidebar/UserComponent";

const firstDrawerWidth = 80;

const userNames = UserData.map((user) => user.name);
const userIds = UserData.map((user) => user.id);

const ResearchPapersNames = ResearchData.map((paper) => paper.name);
const ResearchPapersIds = ResearchData.map((paper) => paper.id);
const optionsForUsers = [...userNames, ...userIds];
const optionsForResearchPapers = [...ResearchPapersNames, ...ResearchPapersIds];

export default function SideBar() {
  const [drawerWidth, setDrawerWidth] = useState(300);
  const { userComponentIsGettingDisplayed, setSelectedComponent, darkThemeEnabled } = useAppContext();
  const [autoCompleteValue, setAutoCompleteValue] = useState("");

  const displayUserAccordingToSearch = () => {
    if (userComponentIsGettingDisplayed) {
      const selectedUser = UserData.find((user) => {
        return (
          user.name.toLocaleLowerCase().includes(autoCompleteValue.toLocaleLowerCase()) ||
          user.id.toLocaleLowerCase().includes(autoCompleteValue.toLocaleLowerCase())
        );
      });
      if (!selectedUser) {
        toast.error("User not found");
        return;
      }
      // console.log(selectedUser);
      setSelectedComponent(selectedUser);
    } else {
      const selectedPaper = ResearchData.find(
        (paper) =>
          paper.name.toLocaleLowerCase().includes(autoCompleteValue.toLocaleLowerCase()) ||
          paper.id.toLocaleLowerCase().includes(autoCompleteValue)
      );
      if (!selectedPaper) {
        toast.error("Paper not found");
        return;
      }
      setSelectedComponent(selectedPaper);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      displayUserAccordingToSearch();
    }
  };

  const handleChangeInput = (event) => {
    setAutoCompleteValue(event.target.value);
  };

  const handleClickOnChveronIcon = () => {
    setDrawerWidth((prevDrawerWidth) => (prevDrawerWidth === 300 ? 0 : 300));
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" sx={{ width: firstDrawerWidth, overflowY: "hidden" }}></AppBar>
        <Drawer
          sx={{
            width: firstDrawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: firstDrawerWidth,
              boxSizing: "border-box",
              overflow: "hidden",
              backgroundColor: "#222431",
            },
          }}
          variant="permanent"
          anchor="left">
          <Divider />
          <ListItem
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1B1C21",
              },
            }}>
            <Avatar alt="" src="" sx={{ width: 45, height: 45, backgroundColor: "#363946" }} />
          </ListItem>
          <List sx={{ display: "flex", height: "100%", justifyContent: "space-between", flexDirection: "column" }}>
            <Box>
              {SIDE_BAR_ICONS.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    height: "80px",
                    padding: "20px",
                    paddingLeft: "8px",
                    borderLeft: index === 0 ? "4px solid #5D68B0" : "none",
                    backgroundColor: index === 0 ? "#1B1C21" : "#222431",
                    "&:hover": {
                      backgroundColor: "#1B1C21",
                    },
                  }}>
                  <ListItemButton
                    sx={{
                      "&:hover": {
                        backgroundColor: "#1B1C21",
                      },
                    }}>
                    <ListItemIcon>
                      {/* Check if the current index is 0 for the first item */}
                      <item.icon sx={{ fontSize: 18, color: index === 0 ? "#5D68B0" : "white" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
            <ListItem
              sx={{
                alignSelf: "flex-end",
              }}>
              <SwitchComponent />
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <ChevronIcon handleClickOnChveronIcon={handleClickOnChveronIcon} drawerWidth={drawerWidth} />
      {/* second drawer */}

      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              overflow: "hidden",
              backgroundColor: "#1B1C21",
              borderRight: "2px solid #1B1C21",
              //   border: "3px solid orange",
              marginLeft: "80px",
            },
          }}
          variant="permanent"
          anchor="left">
          <Divider />
          <ListItem
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#1B1C21",
              },
              //   borderBottom: "2px solid red",
              boxShadow: "0px 0px 10px 0px #02030a99",
              height: "93px",
            }}>
            <Autocomplete
              id="combo-box-demo"
              options={userComponentIsGettingDisplayed ? optionsForUsers : optionsForResearchPapers}
              onKeyDown={handleKeyPress}
              value={autoCompleteValue}
              onChange={(event, newValue) => {
                setAutoCompleteValue(newValue);
              }}
              sx={{ width: 300, borderRadius: "20px" }}
              renderInput={(params) => (
                <TextField
                  // value={autoCompleteValue}
                  onChange={handleChangeInput}
                  {...params}
                  sx={{
                    borderRadius: "20px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",

                      legend: {
                        marginLeft: "30px",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "12px",
                      borderRadius: "20px",
                    },
                  }}
                  placeholder="Search ID"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: null,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon sx={{ fontSize: "18px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <IconButton
              onClick={displayUserAccordingToSearch}
              sx={{ backgroundColor: "white", color: "#5D68B0", borderRadius: "5px!important", marginLeft: "10px" }}>
              <AddIcon sx={{ fontSize: "16px" }} />
            </IconButton>
            {/* <Avatar alt="" src="" sx={{ width: 45, height: 45, backgroundColor: "avatar.main" }} /> */}
          </ListItem>
          <List>
            {userComponentIsGettingDisplayed ? (
              <UserComponent setAutoCompleteValue={setAutoCompleteValue} />
            ) : (
              <TopicComponent setAutoCompleteValue={setAutoCompleteValue} />
            )}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: darkThemeEnabled ? "#1B1C21" : "#EEF0F9", height: "100vh", overflow: "hidden" }}>
          {/* components */}

          <DisplayChatBox firstDrawerWidth={firstDrawerWidth} drawerWidth={drawerWidth} />
        </Box>
      </Box>
    </>
  );
}
