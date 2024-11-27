import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import LocalLibrarySharpIcon from "@mui/icons-material/LocalLibrarySharp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import CampaignSharpIcon from "@mui/icons-material/CampaignSharp";
import { useTheme } from "@mui/material";


interface SideBarProps {
  drawerWidth: number;
  handleDrawerTransitionEnd: () => void;
  handleDrawerClose: () => void;
  mobileOpen: boolean;
  window?: () => Window;
}

const menuItems = [
  {
    text: "Dashboard",
    icon: <HouseSharpIcon />,
    to: "/home",
  },
  {
    text: "Schedule",
    icon: <CalendarMonthSharpIcon />,
    to: "/schedule",
  },
  {
    text: "Courses",
    icon: <LocalLibrarySharpIcon />,
    to: "/courses",
  },
  {
    text: "Gradebook",
    icon: <SchoolSharpIcon />,
    to: "/courses",
  },
  {
    text: "Performance",
    icon: <TrendingUpIcon />,
    to: "/courses",
  },
  {
    text: "Announcement",
    icon: <CampaignSharpIcon />,
    to: "/courses",
  },
];



function SideBar({drawerWidth, handleDrawerTransitionEnd, handleDrawerClose, mobileOpen, window}: SideBarProps) {
  
  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();
  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          padding: "1.5rem",
          color: `${theme.palette.background.default}`,
        }}
      >
        Coligo
      </Typography>
      <Divider />
      <List>
      {menuItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                padding: "10px 2px",
                color: `${theme.palette.background.default}`,
                "& .MuiListItemText-root": {
                  fontSize: "1.5rem", // Increase the text size (e.g., 1.5rem, 18px, 20px)
                  fontWeight: "bold",
                },
                "& .MuiListItemIcon-root": {
                  color: `${theme.palette.background.default}`,
                  fontSize: "2rem", // Increase the icon size (e.g., 2rem, 24px, 3em)
                },
                "&:hover": {
                  backgroundColor: `${theme.palette.background.default}`,
                  color: `${theme.palette.primary.dark}`,
                  "& .MuiListItemIcon-root": {
                    color: `${theme.palette.primary.dark}`,
                  },
                  "& .MuiListItemButton-root": {
                    backgroundColor: `${theme.palette.background.default}`,
                  },
                },
              }}
            >
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: `${theme.palette.background.default}`,
                    fontSize: "2rem", // Increase icon size
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    fontSize: "1.5rem", // Increase text size
                    fontWeight: "bold", // Set font weight to bold
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      
    </div>
  );

  return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,
              background: `linear-gradient(${theme.palette.primary.dark},${theme.palette.primary.main})`,
            },
            
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
              background: `linear-gradient(${theme.palette.primary.dark},${theme.palette.primary.main})`,
             },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  )
}

export default SideBar