import React from "react";
import ReactDOM from "react-dom/client";

import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Card,
  CardContent,
} from "@mui/material";

// CREATE CUSTOM THEME

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },

    secondary: {
      main: "#19857b",
    },
  },

  typography: {
    h2: {
      fontSize: 36,
    },
  },
});

// MAIN APP COMPONENT

function App() {
  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >

      {/* TYPOGRAPHY                                */}

      <Typography
        variant="h2"
        gutterBottom
      >
        Material UI Demo
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
      >
        Demonstration of Material UI components
        with a custom theme.
      </Typography>


      {/* BUTTON                                    */}

      <Box sx={{ marginTop: 3 }}>
        <Typography
          variant="h6"
          gutterBottom
        >
          1. Button
        </Typography>

        <Button
          variant="contained"
          color="primary"
        >
          Click Me
        </Button>
      </Box>


      {/* TEXT FIELD                                */}

      <Box sx={{ marginTop: 4 }}>
        <Typography
          variant="h6"
          gutterBottom
        >
          2. Text Field
        </Typography>

        <TextField
          label="Enter your Name"
          variant="outlined"
        />
      </Box>

      {/* CHECKBOX                                  */}

      <Box sx={{ marginTop: 4 }}>
        <Typography
          variant="h6"
          gutterBottom
        >
          3. Checkbox
        </Typography>

        <FormControlLabel
          control={
            <Checkbox
              name="checkedA"
            />
          }
          label="Accept terms and conditions"
        />
      </Box>


      {/* CARD                                      */}

      <Box sx={{ marginTop: 4 }}>
        <Typography
          variant="h6"
          gutterBottom
        >
          4. Card
        </Typography>

        <Card
          sx={{
            maxWidth: 400,
          }}
        >

          <CardContent>

            {/* Card Title */}
            <Typography
              variant="h5"
              component="div"
            >
              Card Title
            </Typography>

            {/* Card Content */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: 1 }}
            >
              This is some card content.
            </Typography>

          </CardContent>

        </Card>
      </Box>

    </Box>
  );
}

// RENDER APPLICATION WITH THEME PROVIDER

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

      <App />

    </ThemeProvider>

  </React.StrictMode>
);