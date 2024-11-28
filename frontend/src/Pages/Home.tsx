import { Box, Button, Container, Typography } from "@mui/material";
import studentsImage from "../assets/Students-Image.jpg"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import {login} from "../features/auth/authenticationSlice";
import { useNavigate } from "react-router-dom";
function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate= useNavigate();
  const handleLogIn = ()=>{
    dispatch(login());
    navigate("/dashboard");
  }
  return (
  <Box sx={{

    minHeight: '100vh',
    minWidth: '100vw',
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    padding: '3rem'
  }}>
      <Container  
      sx={{
        display:'flex',
        flexDirection: 'column',
        gap: '3rem',
    justifyContent:'center',
    alignItems: 'center',
      }} >
      <Box>
      <Typography variant="h1" align="center" color="primary">
      Welcome to Coligo
      </Typography>
      <Typography  align="center" color="primary">
      Your gateway to academic excellence
      </Typography>
      </Box>
      <Button
        onClick={() => {
          
          handleLogIn()
        }}
        variant="contained"
        color="primary"
        sx={{":&focus":{
          outlineColor: "white"
        }}}
      >
        Login
      </Button>
    </Container>
    <Box
    component="img" 
    src={studentsImage}
    alt = "Students image"
    sx={{
        width: "79%",
        maxHeight:'50vh',
        objectFit: 'contain'
    }}></Box>
    
  </Box>
  );
}

export default Home;
