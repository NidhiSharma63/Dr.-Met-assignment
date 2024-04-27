import { Avatar, ListItemButton, ListItemIcon } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { SIDE_BAR_ICONS } from "../constant/SideBarIcons";

const drawerWidth = 240;
const firstDrawerWidth = 80;

export default function SideBar() {
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
              backgroundColor: "sideBar.main",
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
                backgroundColor: "secondary.main",
              },
            }}>
            <Avatar alt="" src="" sx={{ width: 45, height: 45, backgroundColor: "avatar.main" }} />
          </ListItem>
          <List>
            {SIDE_BAR_ICONS.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "20px",
                  paddingLeft: "8px",
                  borderLeft: index === 0 ? "4px solid #5D68B0" : "none",
                  backgroundColor: index === 0 ? "secondary.main" : "sideBar.main",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                  },
                }}>
                <ListItemButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "secondary.main",
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
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          {/* components */}
        </Box>
      </Box>
    </>
  );
}
