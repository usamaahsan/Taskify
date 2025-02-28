import { Box } from "@mui/material";
import { Taskbox } from "./ui/taskbox/taskbox";

function App() {
  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: "url(images/blackbg.png)",
      }}
    >
      <Taskbox />
    </Box>
  );
}

export default App;
