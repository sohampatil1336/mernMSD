import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function MyCheckbox() {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked color="secondary" />}
      label="Accept Terms & Conditions"
    />
  );
}

export default MyCheckbox;
