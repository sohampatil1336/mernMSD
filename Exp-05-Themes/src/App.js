import React from "react";

import { Box, Typography } from "@mui/material";

import MyButton from "./MyButton";
import MyTextField from "./MyTextField";
import MyCheckbox from "./MyCheckbox";
import MyCard from "./MyCard";

function App() {
  return (
    <Box sx={{ padding: 4 }}>

      <Typography variant="h2" gutterBottom>
        Material UI Demo
      </Typography>

      <Box sx={{ marginBottom: 3 }}>
        <MyButton />
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <MyTextField />
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <MyCheckbox />
      </Box>

      <MyCard />

    </Box>
  );
}

export default App;