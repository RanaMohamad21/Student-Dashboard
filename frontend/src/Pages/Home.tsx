import { Box, Button, Container, Typography } from "@mui/material";
import studentsImage from "../assets/Students-Image.jpg"
function Home() {
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
        onClick={() => console.log("Login Button Clicked!")}
        variant="contained"
        color="primary"
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
