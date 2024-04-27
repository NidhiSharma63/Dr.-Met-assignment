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
import * as React from "react";
import { useAppContext } from "../Provider/AppProvider";
import { SIDE_BAR_ICONS } from "../constant/SideBarIcons";
import DisplayChatBox from "./DisplayChatBox";
import TopicComponent from "./sidebar/TopicComponent";
import UserComponent from "./sidebar/UserComponent";

const drawerWidth = 300;
const firstDrawerWidth = 80;

export default function SideBar() {
  const displayTopics = false;
  const { userComponentIsGettingDisplayed } = useAppContext();
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
          <List>
            {SIDE_BAR_ICONS.map((item, index) => (
              <ListItem
                key={index}
                sx={{
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
          </List>
        </Drawer>
      </Box>
      {/* second drawer */}
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" sx={{ width: drawerWidth, overflowY: "hidden" }}></AppBar>
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
              disablePortal
              id="combo-box-demo"
              options={["Option 1", "Option 2", "Option 3"]}
              sx={{ width: 300, borderRadius: "20px" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    borderRadius: "20px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      height: "32px",

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
                    startAdornment: (
                      <InputAdornment position="start" sx={{ paddingLef: "5px" }}>
                        <SearchOutlinedIcon sx={{ fontSize: "18px" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <IconButton
              sx={{ backgroundColor: "white", color: "#5D68B0", borderRadius: "5px!important", marginLeft: "10px" }}>
              <AddIcon sx={{ fontSize: "16px" }} />
            </IconButton>
            {/* <Avatar alt="" src="" sx={{ width: 45, height: 45, backgroundColor: "avatar.main" }} /> */}
          </ListItem>
          <List>{userComponentIsGettingDisplayed ? <UserComponent /> : <TopicComponent />}</List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "#191B22", height: "100vh", overflow: "hidden" }}>
          {/* components */}

          <DisplayChatBox firstDrawerWidth={firstDrawerWidth} drawerWidth={drawerWidth} />
        </Box>
      </Box>
    </>
  );
}
