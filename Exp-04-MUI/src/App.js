import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Autocomplete,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  Fab,
  LinearProgress,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Rating,
  Skeleton,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  TextField,
  Typography,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";


// ==================================================
// MAIN APP
// ==================================================

function App() {

  // ==================================================
  // MENU
  // ==================================================

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  // ==================================================
  // POPOVER
  // ==================================================

  const [popoverAnchor, setPopoverAnchor] = useState(null);

  const handlePopoverClick = (event) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };

  const popoverOpen = Boolean(popoverAnchor);

  const popoverId = popoverOpen
    ? "simple-popover"
    : undefined;


  // ==================================================
  // RATING
  // ==================================================

  const [rating, setRating] = useState(3);


  // ==================================================
  // AUTOCOMPLETE OPTIONS
  // ==================================================

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
  ];


  // ==================================================
  // RETURN
  // ==================================================

  return (

    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
      }}
    >

      {/* ==================================================
          TITLE
      ================================================== */}

      <Typography
        variant="h3"
        gutterBottom
      >
        MUI Components
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
      >
        Accordion, Alert, Autocomplete, Breadcrumbs,
        Chip, Divider, FAB, Linear Progress, Menu,
        Pagination, Popover, Rating, Skeleton and SpeedDial
      </Typography>


      {/* ==================================================
          1. ACCORDION
      ================================================== */}

      <Box sx={{ marginTop: 4, marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          1. Accordion
        </Typography>

        <Accordion>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >

            <Typography>
              Accordion Title
            </Typography>

          </AccordionSummary>

          <AccordionDetails>

            <Typography>
              Accordion Content
            </Typography>

          </AccordionDetails>

        </Accordion>

      </Box>


      {/* ==================================================
          2. ALERT
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          2. Alert
        </Typography>

        <Alert severity="warning">
          This is a warning alert!
        </Alert>

      </Box>


      {/* ==================================================
          3. AUTOCOMPLETE
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          3. Autocomplete
        </Typography>

        <Autocomplete
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose"
            />
          )}
        />

      </Box>


      {/* ==================================================
          4. BREADCRUMBS
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          4. Breadcrumbs
        </Typography>

        <Breadcrumbs aria-label="breadcrumb">

          <a href="/">
            Home
          </a>

          <a href="/">
            Installation
          </a>

          <Typography color="text.primary">
            Breadcrumbs
          </Typography>

        </Breadcrumbs>

      </Box>


      {/* ==================================================
          5. CHIP
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          5. Chip
        </Typography>

        <Chip label="Chip Component" />

      </Box>


      {/* ==================================================
          6. DIVIDER
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          6. Divider
        </Typography>

        <Typography>
          Content above the divider
        </Typography>

        <Divider />

        <Typography>
          Content below the divider
        </Typography>

      </Box>


      {/* ==================================================
          7. FAB
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          7. Floating Action Button
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >

          {/* FAB 1 */}

          <Fab
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>


          {/* FAB 2 */}

          <Fab
            color="secondary"
            aria-label="edit"
          >
            <EditIcon />
          </Fab>


          {/* FAB 3 */}

          <Fab
            color="error"
            aria-label="favorite"
          >
            <FavoriteIcon />
          </Fab>


          {/* FAB 4 - Extended */}

          <Fab
            variant="extended"
            color="primary"
          >

            <NavigationIcon sx={{ mr: 1 }} />

            Navigate

          </Fab>

        </Box>

      </Box>


      {/* ==================================================
          8. LINEAR PROGRESS
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          8. Linear Progress
        </Typography>

        <Box sx={{ width: 400 }}>

          <LinearProgress />

        </Box>

      </Box>


      {/* ==================================================
          9. MENU
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          9. Menu
        </Typography>

        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          variant="contained"
        >
          Open Menu
        </Button>


        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >

          <MenuItem onClick={handleMenuClose}>
            Profile
          </MenuItem>

          <MenuItem onClick={handleMenuClose}>
            My account
          </MenuItem>

          <MenuItem onClick={handleMenuClose}>
            Logout
          </MenuItem>

        </Menu>

      </Box>


      {/* ==================================================
          10. PAGINATION
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          10. Pagination
        </Typography>

        <Pagination
          count={10}
          color="primary"
        />

      </Box>


      {/* ==================================================
          11. POPOVER
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          11. Popover
        </Typography>

        <Button
          aria-describedby={popoverId}
          variant="contained"
          onClick={handlePopoverClick}
        >
          Open Popover
        </Button>


        <Popover
          id={popoverId}
          open={popoverOpen}
          anchorEl={popoverAnchor}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >

          <Typography sx={{ p: 2 }}>
            The content of the Popover.
          </Typography>

        </Popover>

      </Box>


      {/* ==================================================
          12. RATING
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          12. Rating
        </Typography>

        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />

        <Typography>
          Rating: {rating}
        </Typography>

      </Box>


      {/* ==================================================
          13. SKELETON
      ================================================== */}

      <Box sx={{ marginBottom: 5 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          13. Skeleton
        </Typography>

        <Skeleton
          variant="rectangular"
          width={210}
          height={118}
        />

      </Box>


      {/* ==================================================
          14. SPEED DIAL
      ================================================== */}

      <Box
        sx={{
          marginBottom: 10,
          minHeight: 300,
          position: "relative",
        }}
      >

        <Typography
          variant="h5"
          gutterBottom
        >
          14. Speed Dial
        </Typography>


        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon />}
          direction="up"
          sx={{
            position: "absolute",
            left: 30,
            bottom: 30,
          }}
        >

          <SpeedDialAction
            icon={<FileCopyIcon />}
            tooltipTitle="Copy"
          />

          <SpeedDialAction
            icon={<SaveIcon />}
            tooltipTitle="Save"
          />

          <SpeedDialAction
            icon={<PrintIcon />}
            tooltipTitle="Print"
          />

          <SpeedDialAction
            icon={<ShareIcon />}
            tooltipTitle="Share"
          />

        </SpeedDial>

      </Box>

    </Box>
  );
}


// ==================================================
// EXPORT APP
// ==================================================

export default App;