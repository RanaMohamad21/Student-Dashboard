import { Divider, Drawer, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
const drawerWidth = 270;

function SideBar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          padding: 3,
          background: `linear-gradient(${theme.palette.primary.main},${theme.palette.secondary.main})`,
        },
      }}
      variant={`${isSmallScreen ? "temporary" : "permanent"}`}
      anchor="left"
    >
      <div>
        <Typography variant="h3" color="background.default" align="center">
          Coligo
        </Typography>
       
      </div>
    </Drawer>
  );
}

export default SideBar;
