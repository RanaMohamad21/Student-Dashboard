import * as React from "react";
// import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
// import CssBaseline from '@mui/material/CssBaseline';

// import IconButton from '@mui/material/IconButton';

// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "../Components/SideBar";
import { useTheme } from "@mui/material";
// import TopBar from '../Components/TopBar';
import NavBar from "../Components/NavBar";
import ExamTips from "../Components/examTips";
import Announcements from "../Components/Announcements";
import DueQuizzes from "../Components/DueQuizzes";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          background: `${theme.palette.primary.light}`,
          minHeight: "100vh",
          paddingTop: "60px",
          
        }}
      >
        {/* <CssBaseline /> */}
        <NavBar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />

        <SideBar
          drawerWidth={drawerWidth}
          handleDrawerClose={handleDrawerClose}
          mobileOpen={mobileOpen}
          window={window}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* <Toolbar /> */}
          <Box
            sx={{
             
            }}
          >
            <ExamTips />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            {/* announcements */}
            <Announcements />
            {/* Exams */}
            <DueQuizzes/>
          </Box>
        </Box>
      </Box>
    </>
  );
}
