import { IconButton, useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { useEffect, useState } from "react";
import { fetchAnnouncements } from "../features/announcements/announcementSlice";
function Announcements() {
  const dispatch = useDispatch<AppDispatch>();
  const { announcements, loading, error } = useSelector(
    (state: RootState) => state.announcements
  );
  // const [newAnnouncement, setNewAnnouncement] = useState({
  //   isGlobal: false,
  //   announcer: {},
  //   targetedGrades:[],
  //   message: "",
  //   title: "",
  //   createdAt: ""
  // });

  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  if (loading) {
    return <div>Loading</div>;
  }
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
      <Typography variant="h5" fontWeight={"bold"} sx={{ color: `black` }}>
        Announcements
      </Typography>
      <Typography sx={{ color: `${theme.palette.secondary.dark}` }}>
        Stay updated with important announcements
      </Typography>

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
              <IconButton>
                <AccountCircle />
              </IconButton>

              <Box>
                <Typography fontWeight={"bold"}>
                  {announcement.announcer.id}
                </Typography>
                <Typography
                  sx={{
                    color: `${theme.palette.secondary.main}`,
                    fontSize: "13px",
                  }}
                >
                  {announcement.isGlobal
                    ? "Management"
                    : announcement.targetedGrades[0]}
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

      {/* Announcement Section */}
      {/* <Box
        sx={{
          display: "grid",
          marginTop:3, 
          gridTemplateColumns: { ex: "1fr", md: "1fr 3fr" },
          gap: "1px",

        }}
      >
       
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Box sx={{
          display: 'flex'
        }}>
          <IconButton >

          <AccountCircle />
          </IconButton>
          
          <Box >
          <Typography  fontWeight={'bold'}>Mr. Ahmed Mostafa</Typography>
          <Typography sx={{
            color: `${theme.palette.secondary.main}`,
            fontSize: '13px'
          }}>Math 101</Typography>
          </Box>
        </Box>
        </Box>
     
        <Box sx={{display: 'flex',
           alignItems: 'center', 
           borderLeft: `2px solid ${theme.palette.secondary.light}`,
           paddingLeft: 2,
           paddingRight:1
        }}>
          <Typography>Attention students! The next math quiz will be held on Friday, so make sure to review all the topics covered. Good luck to everyone! 
          </Typography>
        </Box>
      </Box> */}
    </Box>
  );
}

export default Announcements;
