
import { Box, Button,  Typography, useTheme } from "@mui/material";
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { fetchQuizzes } from "../features/quizzes/quizzesSlice";
import { useEffect } from "react";
import formateDateTime from "../utils/dateTimeFormat";
import LoadingSppiner from "./LoadingSppiner";

function DueQuizzes() {
  const dispatch = useDispatch<AppDispatch>();
  const {quizzes, loading} = useSelector((state: RootState)=> state.quizzes)
  const theme = useTheme();

  useEffect(()=>{
    dispatch(fetchQuizzes());
  }, [dispatch]);

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
       <Box>
     <Typography variant="h5" fontWeight={"bold"} sx={{ color: `black` }}>
        What's due
      </Typography>
      <Typography sx={{ color: `${theme.palette.secondary.dark}` }}>
      Your assignments and quizzes, organized and ready to tackle.
      </Typography>

     </Box>
       {loading?<LoadingSppiner/>:
       <Box>
    
      {quizzes.map((quiz)=>(
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
          
          
          
          <Typography  fontWeight={'bold'}>{quiz.title}</Typography>
          
         
        </Box>
        </Box>
        {/* Quiz Details */}
        <Box sx={{
          pb:2,
          color: `${theme.palette.secondary.dark}`
        }}>
          <Typography>Course: {quiz.subject}</Typography>
          <Typography>Due on: {formateDateTime(quiz.schedule.start)}</Typography>
        </Box>

        {/* Attempt Quiz */}
        <Button variant="outlined" sx={{color: `${theme.palette.primary.dark}`}}>Start Quiz</Button>
      </Box>
      ))}
       </Box>}

    </Box>
  )
}

export default DueQuizzes