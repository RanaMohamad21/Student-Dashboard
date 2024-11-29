import {  IconButton, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import CampaignIcon from '@mui/icons-material/Campaign';
import { fetchAnnouncements } from "../features/announcements/announcementSlice";
import LoadingSppiner from "./LoadingSppiner";
function Announcements() {
  const dispatch = useDispatch<AppDispatch>();
  const { announcements, loading } = useSelector(
    (state: RootState) => state.announcements
  );


  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);


  return (
    <Box
      sx={{
        flex: 2,
        marginBottom: 2,
        p: 3,
        background: `${theme.palette.background.default}`,

        borderRadius: "10px",
      }}
    >
      <Box>
      <Typography variant="h5" fontWeight={"bold"} sx={{ color: `black` }}>
        Announcements
      </Typography>
      <Typography sx={{ color: `${theme.palette.secondary.dark}` }}>
        Stay updated with important announcements
      </Typography>
      </Box>
      {loading? <LoadingSppiner/>:
      <Box>
      

      {/* Announcement Section */}
      {announcements.map((announcement) => (
        <Box
          sx={{
            display: "grid",
            marginTop: 3,
            gridTemplateColumns: { ex: "1fr", md: "1fr 3fr" },
            gap: "1px",
          }}
        >
          {/* Announcer */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <IconButton sx={{color: theme.palette.primary.dark}}>
                <CampaignIcon />
              </IconButton>

              <Box sx={{marginTop:1, pr:1}}>
                <Typography fontWeight={"bold"}>
                  {announcement.title}
                </Typography>
                <Typography
                  sx={{
                    color: `${theme.palette.secondary.main}`,
                    fontSize: "13px",
                    textTransform: 'capitalize',
                  }}
                >
                  {announcement.isGlobal
                    ? "Management"
                    : announcement.announcer.role}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Announcement content */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderLeft: `2px solid ${theme.palette.secondary.light}`,
              paddingLeft: 2,
            }}
          >
            <Typography>{announcement.message}</Typography>
          </Box>
        </Box>
      ))}

      </Box>}
      
    </Box>
  );
}

export default Announcements;
