
import { Box, Button,  Typography, useTheme } from "@mui/material";
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

function DueQuizzes() {
  const theme = useTheme();
  return (
    <Box 
    // align="center"
    sx={{
      flex: 1,
      marginBottom: 4,
      px:5,
      py: 3,
      background: `${theme.palette.background.default}`,
      height: 'fit-content',
      borderRadius: "10px",
    }}>
       <Typography variant="h5" fontWeight={"bold"} sx={{ color: `black` }}>
        What's due
      </Typography>
      <Typography sx={{ color: `${theme.palette.secondary.dark}` }}>
      Your assignments and quizzes, organized and ready to tackle.
      </Typography>

      <Box>
        {/* Quiz Title */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <Box  sx={{
          display: 'flex',
          py:2,
          color: `${theme.palette.primary.dark}`
        }}>
        

          <HourglassTopIcon />
          
          
          
          <Typography  fontWeight={'bold'}>Unit 2 quiz</Typography>
          
         
        </Box>
        </Box>
        {/* Quiz Details */}
        <Box sx={{
          pb:2,
          color: `${theme.palette.secondary.dark}`
        }}>
          <Typography>Course: Physics 02</Typography>
          <Typography>Topic: Unit2: Motion and fources</Typography>
          <Typography>Due on: 20 Dec 2024 - 09:00PM</Typography>
        </Box>

        {/* Attempt Quiz */}
        <Button variant="outlined" sx={{color: `${theme.palette.primary.dark}`}}>Start Quiz</Button>
      </Box>

    </Box>
  )
}

export default DueQuizzes