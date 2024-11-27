import { Button, Fade, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

const examTips = [
  { tip: "Nothing happens until something moves.", person: "Alber Einstein" },
  { tip: "The only way to learn is to do.", person: "Richard Feynman" },
  { tip: "Success is no accident; it's hard work.", person: "Ibn Sina" },
  {
    tip: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein",
  },
  {
    tip: "An experiment is never a failure; it always teaches something.",
    person: "Thomas Edison",
  },
  {
    tip: "Knowledge is power, but applied knowledge is wisdom.",
    person: "Ahmad Al-Farghani",
  },
  {
    tip: "The important thing is not to stop questioning.",
    person: "Albert Einstein",
  },
  { tip: "Every genius has a unique routine.", person: "Marie Curie" },
  { tip: "Wisdom begins in wonder.", person: "Socrates" },
  {
    tip: "Plan your work and work your plan.",
    person: "El-Hassan Ibn Al-Haytham",
  },
  {
    tip: "Education is the key to unlocking the world.",
    person: "Malala Yousafzai",
  },
  { tip: "Small steps lead to big discoveries.", person: "Jabir Ibn Hayyan" },
  {
    tip: "Imagination is more important than knowledge.",
    person: "Albert Einstein",
  },
  {
    tip: "Don’t let yesterday take up too much of today.",
    person: "Khalil Gibran",
  },
  { tip: "Practice makes excellence.", person: "Ibn Rushd" },
  { tip: "Creativity is intelligence having fun.", person: "Albert Einstein" },
  {
    tip: "The best way to predict the future is to create it.",
    person: "Alan Turing",
  },
  { tip: "Learning never exhausts the mind.", person: "Leonardo da Vinci" },
  { tip: "A focused mind is a powerful mind.", person: "Mustafa Mahmoud" },
  { tip: "Curiosity is the engine of achievement.", person: "Ken Robinson" },
  { tip: "Excellence is not an act, but a habit.", person: "Aristotle" },
];

function ExamTips() {
  const theme = useTheme();
  const [tipIndex, setTipIndex] = useState(0);
  const [fade, setFade] = useState(true);

  function changeTip() {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setTipIndex((prev) => (prev + 1) % examTips.length); // Update tip after fade-out
      setFade(true); // Start fade-in
    }, 300); // Match the fade transition duration
  }



  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textTransform: "uppercase",
          color: `${theme.palette.primary.dark}`,
        }}
      >
        Exams Time
      </Typography>
      <Typography variant="h6">
        Here we are, Are you ready to fight? Don't worry, we prepared some tips
        to be ready for your exams.
      </Typography>
      <Fade in={fade} timeout={300}>
        <Typography
          sx={{
            fontStyle: "italic",
            py: 2,
            color: `${theme.palette.secondary.dark}`,
          }}
        >
          {`"${examTips[tipIndex].tip}" - ${examTips[tipIndex].person}`}
        </Typography>
      </Fade>

      <Button
        variant="contained"
        sx={{
          color: "white",
          "&:focus": {
            outline: `2px solid ${theme.palette.primary.dark}`, // Sets the focus outline color and width
            outlineOffset: "2px", // Adds spacing between the outline and button
          },
          backgroundColor: `${theme.palette.primary.dark}`,
        }}
        onClick={() => changeTip()}
      >
        View exams tips
      </Button>
    </Box>
  );
}

export default ExamTips;
