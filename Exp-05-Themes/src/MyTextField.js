import React from "react";
import TextField from "@mui/material/TextField";

function MyTextField() {
  return (
    <TextField
      label="Custom Input Field"
      variant="outlined"
      fullWidth
      sx={{ maxWidth: 400 }}
    />
  );
}

export default MyTextField;
