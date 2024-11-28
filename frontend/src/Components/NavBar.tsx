import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';

interface NavBarProps {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavBar({ drawerWidth, handleDrawerToggle }: NavBarProps) {
  const theme = useTheme();
  const [activeSearch, setActiveSearch] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: `linear-gradient(to right,${theme.palette.primary.dark},${theme.palette.primary.main})`,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Welcome Talia,
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            ml: "auto", // Push to the right
            maxWidth: "300px", // Restrict max width
            justifyContent: isLargeScreen ? "flex-start" : "flex-end",
            flexShrink: 0, // Prevent the box from shrinking too much
          }}
        >
          {isLargeScreen ? (
            <Search
              sx={{
                display: "flex",
                borderRadius: "20px",
                alignItems: "center",
                marginRight: 1,
                width: { xs: "auto", sm: "100%" }, // Dynamic width adjustment
              }}
            >
              <SearchIconWrapper
                sx={{
                  ml: isLargeScreen ? 0 : "auto", // Move to far right when input is hidden
                }}
              >
                <SearchIcon
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
              </SearchIconWrapper>
              {isLargeScreen && (
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              )}
            </Search>
          ) : (
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              onClick={() => {
                setActiveSearch(true);
              }}
              sx={{
                "&:focus": {
                  outlineColor: "white",
                  border: "none",
                  outlineWidth: "thin",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          )}
        </Box>

        <Box sx={{ display: 'flex'
            // { xs: 'none', md: 'flex' }
             }}>
            <IconButton title= "Logout" size="large" aria-label="show 4 new mails" color="inherit"
            sx={{"&:focus":{
              outlineColor: theme.palette.primary.light
            }}}
            onClick={()=>{}}
            >
              <Badge  color="error">
                <LogoutIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"

              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
