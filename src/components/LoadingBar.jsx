import { LinearProgress, Box } from "@mui/material";
const LoadingBar = () => {
  console.log("loading bar is visible");
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          height: "2px",
        }}
      />
    </Box>
  );
};

export default LoadingBar;
