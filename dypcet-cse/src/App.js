import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Chip,
  Paper,
  Stack,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Fab,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import GroupsIcon from "@mui/icons-material/Groups";
import ComputerIcon from "@mui/icons-material/Computer";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";


// =====================================================
// NAVIGATION ITEMS
// =====================================================

const navItems = [
  "Home",
  "About",
  "Academics",
  "Faculty",
  "Research",
  "Facilities",
  "Students",
  "Placements",
  "News & Events",
  "Contact",
];


// =====================================================
// MAIN APP
// =====================================================

function App() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [aboutAnchor, setAboutAnchor] = useState(null);

  const [academicsAnchor, setAcademicsAnchor] =
    useState(null);

  const [researchAnchor, setResearchAnchor] =
    useState(null);


  // =====================================================
  // SCROLL FUNCTION
  // =====================================================

  const scrollToSection = (section) => {

    const id = section
      .toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-");

    const element = document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
      });

    }

    setMobileOpen(false);
  };


  // =====================================================
  // DROPDOWN MENU HANDLERS
  // =====================================================

  const handleAboutClick = (event) => {
    setAboutAnchor(event.currentTarget);
  };

  const handleAcademicsClick = (event) => {
    setAcademicsAnchor(event.currentTarget);
  };

  const handleResearchClick = (event) => {
    setResearchAnchor(event.currentTarget);
  };


  return (

    <Box
      sx={{
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
      }}
    >


      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <Box
        sx={{
          backgroundColor: "#071952",
          color: "white",
          py: 0.8,
        }}
      >

        <Container>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >

            <Typography
              variant="body2"
              sx={{ fontSize: 13 }}
            >
              D.Y. Patil College of Engineering &
              Technology, Kolhapur
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >

              <Typography variant="body2">
                Student Login
              </Typography>

              <Typography variant="body2">
                Faculty Login
              </Typography>

            </Box>

          </Box>

        </Container>

      </Box>


      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: "white",
          color: "#071952",
        }}
      >

        <Container>

          <Toolbar
            disableGutters
            sx={{
              minHeight: 78,
              justifyContent: "space-between",
            }}
          >

            {/* LOGO */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >

              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#071952",
                }}
              >
                DYP
              </Avatar>

              <Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: {
                      xs: 15,
                      md: 18,
                    },
                  }}
                >
                  D.Y. PATIL
                </Typography>

                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  CSE DEPARTMENT
                </Typography>

              </Box>

            </Box>


            {/* DESKTOP NAVIGATION */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                alignItems: "center",
                gap: 0.3,
              }}
            >

              <Button
                onClick={() => scrollToSection("Home")}
              >
                Home
              </Button>


              <Button
                onClick={handleAboutClick}
              >
                About
              </Button>

              <Menu
                anchorEl={aboutAnchor}
                open={Boolean(aboutAnchor)}
                onClose={() => setAboutAnchor(null)}
              >

                <MenuItem
                  onClick={() => {
                    setAboutAnchor(null);
                    scrollToSection("About");
                  }}
                >
                  Department Overview
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setAboutAnchor(null);
                    scrollToSection("Vision");
                  }}
                >
                  Vision & Mission
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setAboutAnchor(null);
                    scrollToSection("HOD");
                  }}
                >
                  HOD's Desk
                </MenuItem>

              </Menu>


              <Button
                onClick={handleAcademicsClick}
              >
                Academics
              </Button>

              <Menu
                anchorEl={academicsAnchor}
                open={Boolean(academicsAnchor)}
                onClose={() => setAcademicsAnchor(null)}
              >

                <MenuItem
                  onClick={() => {
                    setAcademicsAnchor(null);
                    scrollToSection("Academics");
                  }}
                >
                  B.E. CSE
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setAcademicsAnchor(null);
                    scrollToSection("Curriculum");
                  }}
                >
                  Curriculum
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setAcademicsAnchor(null);
                    scrollToSection("Academics");
                  }}
                >
                  Syllabus
                </MenuItem>

              </Menu>


              <Button
                onClick={() => scrollToSection("Faculty")}
              >
                Faculty
              </Button>


              <Button
                onClick={handleResearchClick}
              >
                Research
              </Button>

              <Menu
                anchorEl={researchAnchor}
                open={Boolean(researchAnchor)}
                onClose={() => setResearchAnchor(null)}
              >

                <MenuItem
                  onClick={() => {
                    setResearchAnchor(null);
                    scrollToSection("Research");
                  }}
                >
                  Research Areas
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setResearchAnchor(null);
                    scrollToSection("Research");
                  }}
                >
                  Projects
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setResearchAnchor(null);
                    scrollToSection("Research");
                  }}
                >
                  Publications
                </MenuItem>

              </Menu>


              <Button
                onClick={() =>
                  scrollToSection("Facilities")
                }
              >
                Facilities
              </Button>


              <Button
                onClick={() =>
                  scrollToSection("Students")
                }
              >
                Students
              </Button>


              <Button
                onClick={() =>
                  scrollToSection("Placements")
                }
              >
                Placements
              </Button>


              <Button
                onClick={() =>
                  scrollToSection("Contact")
                }
              >
                Contact
              </Button>

            </Box>


            {/* MOBILE MENU */}

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>

        </Container>

      </AppBar>


      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >

        <Box
          sx={{
            width: 280,
          }}
        >

          <Box
            sx={{
              p: 2,
              backgroundColor: "#071952",
              color: "white",
            }}
          >

            <Typography
              variant="h6"
              fontWeight={700}
            >
              CSE Department
            </Typography>

          </Box>


          <List>

            {navItems.map((item) => (

              <ListItemButton
                key={item}
                onClick={() =>
                  scrollToSection(item)
                }
              >

                <ListItemText
                  primary={item}
                />

              </ListItemButton>

            ))}

          </List>

        </Box>

      </Drawer>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <Box
        id="home"
        sx={{
          background:
            "linear-gradient(120deg, #071952 0%, #0b3b7a 55%, #1597bb 100%)",
          color: "white",
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >

        <Container>

          <Grid
            container
            spacing={5}
            alignItems="center"
          >

            <Grid item xs={12} md={7}>

              <Chip
                label="COMPUTER SCIENCE & ENGINEERING"
                sx={{
                  backgroundColor:
                    "rgba(255,255,255,0.15)",
                  color: "white",
                  fontWeight: 700,
                  mb: 2,
                }}
              />


              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: 38,
                    md: 58,
                  },
                  lineHeight: 1.1,
                }}
              >
                Department of
                <br />
                Computer Science
                <br />
                & Engineering
              </Typography>


              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  maxWidth: 680,
                  lineHeight: 1.7,
                  color: "#dce8ff",
                }}
              >
                Building technically competent,
                innovative and industry-ready
                computing professionals through
                quality education, research and
                practical learning.
              </Typography>


              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
                sx={{ mt: 4 }}
              >

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() =>
                    scrollToSection("About")
                  }
                  sx={{
                    backgroundColor: "white",
                    color: "#071952",
                    fontWeight: 700,
                    px: 3,
                  }}
                >
                  Explore Department
                </Button>


                <Button
                  variant="outlined"
                  size="large"
                  onClick={() =>
                    scrollToSection("Contact")
                  }
                  sx={{
                    borderColor: "white",
                    color: "white",
                    px: 3,
                  }}
                >
                  Contact Us
                </Button>

              </Stack>

            </Grid>


            <Grid item xs={12} md={5}>

              <Paper
                elevation={10}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  background:
                    "rgba(255,255,255,0.1)",
                  color: "white",
                  border:
                    "1px solid rgba(255,255,255,0.2)",
                }}
              >

                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                >
                  CSE at a Glance
                </Typography>

                <Divider
                  sx={{
                    borderColor:
                      "rgba(255,255,255,0.2)",
                    mb: 2,
                  }}
                />


                <Grid container spacing={2}>

                  <Grid item xs={6}>

                    <Typography
                      variant="h4"
                      fontWeight={800}
                    >
                      180
                    </Typography>

                    <Typography>
                      UG Intake
                    </Typography>

                  </Grid>


                  <Grid item xs={6}>

                    <Typography
                      variant="h4"
                      fontWeight={800}
                    >
                      4
                    </Typography>

                    <Typography>
                      Years
                    </Typography>

                  </Grid>


                  <Grid item xs={6}>

                    <Typography
                      variant="h4"
                      fontWeight={800}
                    >
                      1984
                    </Typography>

                    <Typography>
                      Institute Legacy
                    </Typography>

                  </Grid>


                  <Grid item xs={6}>

                    <Typography
                      variant="h4"
                      fontWeight={800}
                    >
                      A
                    </Typography>

                    <Typography>
                      NAAC Grade
                    </Typography>

                  </Grid>

                </Grid>

              </Paper>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          QUICK LINKS
      ===================================================== */}

      <Container
        sx={{
          mt: -5,
          position: "relative",
        }}
      >

        <Grid
          container
          spacing={2}
        >

          {[
            {
              title: "Academics",
              icon: <SchoolIcon />,
              section: "Academics",
            },
            {
              title: "Research",
              icon: <ScienceIcon />,
              section: "Research",
            },
            {
              title: "Faculty",
              icon: <GroupsIcon />,
              section: "Faculty",
            },
            {
              title: "Facilities",
              icon: <ComputerIcon />,
              section: "Facilities",
            },
          ].map((item) => (

            <Grid
              item
              xs={6}
              md={3}
              key={item.title}
            >

              <Card
                onClick={() =>
                  scrollToSection(item.section)
                }
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform:
                      "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >

                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >

                  <Avatar
                    sx={{
                      backgroundColor:
                        "#071952",
                    }}
                  >
                    {item.icon}
                  </Avatar>

                  <Typography
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <Box
        id="about"
        sx={{
          py: 10,
        }}
      >

        <Container>

          <Grid
            container
            spacing={6}
            alignItems="center"
          >

            <Grid item xs={12} md={6}>

              <Chip
                label="ABOUT THE DEPARTMENT"
                color="primary"
                sx={{ mb: 2 }}
              />

              <Typography
                variant="h3"
                fontWeight={800}
                gutterBottom
              >
                Computer Science &
                Engineering
              </Typography>


              <Typography
                color="text.secondary"
                lineHeight={1.9}
              >
                Computer Science & Engineering
                is one of the key academic programs
                of D.Y. Patil College of Engineering
                & Technology, Kolhapur. The program
                integrates computer science,
                programming, algorithms, networking,
                software development and computer
                systems.
              </Typography>


              <Typography
                color="text.secondary"
                lineHeight={1.9}
                sx={{ mt: 2 }}
              >
                The department emphasizes practical
                learning, modern computing
                technologies, innovation, research
                and industry-oriented skills.
              </Typography>


              <Button
                variant="contained"
                sx={{ mt: 3 }}
                endIcon={<ArrowForwardIcon />}
              >
                Know More
              </Button>

            </Grid>


            <Grid item xs={12} md={6}>

              <Grid
                container
                spacing={2}
              >

                <Grid item xs={6}>

                  <Card
                    sx={{
                      p: 2,
                      height: "100%",
                    }}
                  >

                    <EngineeringIcon
                      sx={{
                        fontSize: 45,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mt: 1 }}
                    >
                      Technical Excellence
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Strong foundation in
                      computer science and
                      engineering.
                    </Typography>

                  </Card>

                </Grid>


                <Grid item xs={6}>

                  <Card
                    sx={{
                      p: 2,
                      height: "100%",
                    }}
                  >

                    <ScienceIcon
                      sx={{
                        fontSize: 45,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mt: 1 }}
                    >
                      Research
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Encouraging innovation,
                      projects and research.
                    </Typography>

                  </Card>

                </Grid>


                <Grid item xs={6}>

                  <Card
                    sx={{
                      p: 2,
                      height: "100%",
                    }}
                  >

                    <BusinessIcon
                      sx={{
                        fontSize: 45,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mt: 1 }}
                    >
                      Industry Connect
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Industry exposure,
                      internships and
                      professional skills.
                    </Typography>

                  </Card>

                </Grid>


                <Grid item xs={6}>

                  <Card
                    sx={{
                      p: 2,
                      height: "100%",
                    }}
                  >

                    <GroupsIcon
                      sx={{
                        fontSize: 45,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mt: 1 }}
                    >
                      Student Growth
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Technical clubs,
                      projects and
                      extracurricular activities.
                    </Typography>

                  </Card>

                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          VISION & MISSION
      ===================================================== */}

      <Box
        id="vision"
        sx={{
          backgroundColor: "#071952",
          color: "white",
          py: 9,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            gutterBottom
          >
            Vision & Mission
          </Typography>


          <Grid
            container
            spacing={4}
            sx={{ mt: 2 }}
          >

            <Grid item xs={12} md={6}>

              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                }}
              >

                <Typography
                  variant="h4"
                  fontWeight={800}
                  color="#071952"
                  gutterBottom
                >
                  Vision
                </Typography>

                <Typography
                  color="text.secondary"
                  lineHeight={1.9}
                >
                  To become a leading department
                  producing high-quality technical
                  professionals equipped with
                  strong fundamentals, technical
                  skills and professional ethics.
                </Typography>

              </Paper>

            </Grid>


            <Grid item xs={12} md={6}>

              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 3,
                }}
              >

                <Typography
                  variant="h4"
                  fontWeight={800}
                  color="#071952"
                  gutterBottom
                >
                  Mission
                </Typography>


                <Stack spacing={1.5}>

                  <Typography>
                    • Provide comprehensive knowledge
                    using modern technologies.
                  </Typography>

                  <Typography>
                    • Encourage creativity,
                    professionalism and social
                    awareness.
                  </Typography>

                  <Typography>
                    • Strengthen industry-institute
                    interaction.
                  </Typography>

                  <Typography>
                    • Promote entrepreneurship and
                    professional development.
                  </Typography>

                </Stack>

              </Paper>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          HOD DESK
      ===================================================== */}

      <Box
        id="hod"
        sx={{
          py: 10,
        }}
      >

        <Container>

          <Grid
            container
            spacing={5}
            alignItems="center"
          >

            <Grid item xs={12} md={4}>

              <Avatar
                sx={{
                  width: 180,
                  height: 180,
                  mx: "auto",
                  backgroundColor:
                    "#071952",
                  fontSize: 55,
                }}
              >
                HOD
              </Avatar>

            </Grid>


            <Grid item xs={12} md={8}>

              <Chip
                label="HEAD OF DEPARTMENT"
                color="primary"
                sx={{ mb: 2 }}
              />

              <Typography
                variant="h3"
                fontWeight={800}
              >
                HOD's Desk
              </Typography>


              <Typography
                color="text.secondary"
                lineHeight={1.9}
                sx={{ mt: 2 }}
              >
                Welcome to the Department of
                Computer Science & Engineering.
                Our department is committed to
                creating an academic environment
                that combines strong fundamentals,
                practical learning, innovation,
                research and industry exposure.
              </Typography>


              <Typography
                color="text.secondary"
                lineHeight={1.9}
                sx={{ mt: 2 }}
              >
                Students are encouraged to explore
                emerging technologies, participate
                in projects, internships, technical
                events and research activities.
              </Typography>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          ACADEMICS
      ===================================================== */}

      <Box
        id="academics"
        sx={{
          backgroundColor: "#eef3fa",
          py: 10,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            gutterBottom
          >
            Academics
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 5,
            }}
          >
            A curriculum combining fundamental
            computer science concepts with modern
            technologies and practical learning.
          </Typography>


          <Grid
            container
            spacing={3}
          >

            {[
              {
                title: "B.E. Computer Science & Engineering",
                icon: <ComputerIcon />,
                text:
                  "Four-year undergraduate engineering program.",
              },

              {
                title: "Programming & Algorithms",
                icon: <CodeIcon />,
                text:
                  "Programming, data structures, algorithms and software engineering.",
              },

              {
                title: "AI & Machine Learning",
                icon: <PsychologyIcon />,
                text:
                  "Modern computational intelligence and data-driven technologies.",
              },

              {
                title: "Cloud & Computing",
                icon: <CloudIcon />,
                text:
                  "Cloud computing, distributed systems and modern infrastructure.",
              },

            ].map((item) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={item.title}
              >

                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform:
                        "translateY(-5px)",
                      boxShadow: 5,
                    },
                  }}
                >

                  <CardContent>

                    <Avatar
                      sx={{
                        backgroundColor:
                          "#071952",
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Avatar>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {item.text}
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>


          {/* CURRICULUM ACCORDION */}

          <Box
            id="curriculum"
            sx={{ mt: 6 }}
          >

            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
            >
              Academic Information
            </Typography>


            <Accordion>

              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >

                <Typography fontWeight={600}>
                  Curriculum
                </Typography>

              </AccordionSummary>

              <AccordionDetails>

                <Typography color="text.secondary">
                  The curriculum covers foundational
                  engineering subjects, programming,
                  data structures, databases, computer
                  networks, operating systems,
                  software engineering and advanced
                  computing topics.
                </Typography>

              </AccordionDetails>

            </Accordion>


            <Accordion>

              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >

                <Typography fontWeight={600}>
                  Electives
                </Typography>

              </AccordionSummary>

              <AccordionDetails>

                <Typography color="text.secondary">
                  Elective areas can include
                  information security, computer
                  vision, advanced networking,
                  image processing, blockchain and
                  other emerging technologies.
                </Typography>

              </AccordionDetails>

            </Accordion>


            <Accordion>

              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >

                <Typography fontWeight={600}>
                  Projects & Practical Learning
                </Typography>

              </AccordionSummary>

              <AccordionDetails>

                <Typography color="text.secondary">
                  Students apply theoretical concepts
                  through laboratory work, projects,
                  internships, technical competitions
                  and industry-oriented activities.
                </Typography>

              </AccordionDetails>

            </Accordion>

          </Box>

        </Container>

      </Box>


      {/* =====================================================
          FACULTY
      ===================================================== */}

      <Box
        id="faculty"
        sx={{
          py: 10,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            gutterBottom
          >
            Faculty & Staff
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 5,
            }}
          >
            Experienced faculty supporting teaching,
            mentoring, research and student development.
          </Typography>


          <Grid
            container
            spacing={3}
          >

            {[
              "Professor / Associate Professor",
              "Assistant Professor",
              "Assistant Professor",
              "Assistant Professor",
              "Assistant Professor",
              "Department Staff",
            ].map((designation, index) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >

                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    height: "100%",
                  }}
                >

                  <Avatar
                    sx={{
                      width: 90,
                      height: 90,
                      mx: "auto",
                      mb: 2,
                      backgroundColor:
                        "#071952",
                    }}
                  >
                    CSE
                  </Avatar>

                  <Typography
                    variant="h6"
                    fontWeight={700}
                  >
                    Faculty Member
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    {designation}
                  </Typography>

                  <Chip
                    label="Computer Science & Engineering"
                    size="small"
                    sx={{ mt: 2 }}
                  />

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          RESEARCH
      ===================================================== */}

      <Box
        id="research"
        sx={{
          backgroundColor: "#071952",
          color: "white",
          py: 10,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            gutterBottom
          >
            Research & Innovation
          </Typography>


          <Typography
            textAlign="center"
            sx={{
              maxWidth: 750,
              mx: "auto",
              color: "#cbd8f0",
              mb: 6,
            }}
          >
            Research and project activities can
            address both core computer science
            areas and emerging technologies.
          </Typography>


          <Grid
            container
            spacing={3}
          >

            {[
              {
                title: "Artificial Intelligence",
                icon: <PsychologyIcon />,
              },

              {
                title: "Machine Learning",
                icon: <ScienceIcon />,
              },

              {
                title: "Cyber Security",
                icon: <SecurityIcon />,
              },

              {
                title: "Data Science",
                icon: <StorageIcon />,
              },

              {
                title: "Cloud Computing",
                icon: <CloudIcon />,
              },

              {
                title: "Computer Networks",
                icon: <ComputerIcon />,
              },

            ].map((item) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.title}
              >

                <Paper
                  sx={{
                    p: 3,
                    height: "100%",
                    borderRadius: 3,
                    backgroundColor:
                      "rgba(255,255,255,0.08)",
                    color: "white",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                  }}
                >

                  <Avatar
                    sx={{
                      backgroundColor:
                        "rgba(255,255,255,0.15)",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Avatar>

                  <Typography
                    variant="h6"
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>

                </Paper>

              </Grid>

            ))}

          </Grid>


          <Box sx={{ mt: 6 }}>

            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
            >
              Emerging Research Areas
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
            >

              <Chip
                label="Generative AI"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              />

              <Chip
                label="Deep Learning"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              />

              <Chip
                label="Blockchain"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              />

              <Chip
                label="IoT"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              />

              <Chip
                label="Computer Vision"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              />

              <Chip
                label="Cloud Computing"
                sx={{
                  color: "white",
                  borderColor: "white",
                }}
                variant="outlined"
              />

            </Stack>

          </Box>

        </Container>

      </Box>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <Box
        id="facilities"
        sx={{
          py: 10,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            gutterBottom
          >
            Department Facilities
          </Typography>


          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 5,
            }}
          >
            Modern laboratories and computing
            facilities supporting practical learning
            and project development.
          </Typography>


          <Grid
            container
            spacing={3}
          >

            {[
              "Programming Laboratory",
              "System Programming Laboratory",
              "Cloud Computing Laboratory",
              "Mobile Computing Laboratory",
              "Computer Network Laboratory",
              "Database Laboratory",
              "Project Laboratory",
            ].map((lab) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={lab}
              >

                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                  }}
                >

                  <CardContent>

                    <ComputerIcon
                      sx={{
                        fontSize: 45,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mt: 2 }}
                    >
                      {lab}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Equipped for practical
                      learning, experiments,
                      assignments and projects.
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          STUDENTS
      ===================================================== */}

      <Box
        id="students"
        sx={{
          backgroundColor: "#eef3fa",
          py: 10,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            gutterBottom
          >
            Student Activities
          </Typography>


          <Grid
            container
            spacing={3}
            sx={{ mt: 2 }}
          >

            {[
              "Technical Projects",
              "Coding & Hackathons",
              "Internships",
              "Industrial Visits",
              "Technical Workshops",
              "Innovation & Entrepreneurship",
            ].map((activity) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={activity}
              >

                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                  }}
                >

                  <CardContent>

                    <GroupsIcon
                      sx={{
                        fontSize: 42,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ mt: 2 }}
                    >
                      {activity}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Opportunities for students
                      to develop technical,
                      professional and
                      leadership skills.
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          PLACEMENTS
      ===================================================== */}

      <Box
        id="placements"
        sx={{
          py: 10,
        }}
      >

        <Container>

          <Grid
            container
            spacing={5}
            alignItems="center"
          >

            <Grid item xs={12} md={6}>

              <Chip
                label="TRAINING & PLACEMENT"
                color="primary"
                sx={{ mb: 2 }}
              />

              <Typography
                variant="h3"
                fontWeight={800}
                gutterBottom
              >
                Career & Placements
              </Typography>


              <Typography
                color="text.secondary"
                lineHeight={1.9}
              >
                The CSE program focuses on developing
                industry-ready skills through technical
                training, internships, projects,
                industry interaction and career
                development activities.
              </Typography>


              <Button
                variant="contained"
                sx={{ mt: 3 }}
                endIcon={<ArrowForwardIcon />}
              >
                Training & Placement
              </Button>

            </Grid>


            <Grid item xs={12} md={6}>

              <Grid
                container
                spacing={2}
              >

                <Grid item xs={6}>

                  <Card sx={{ p: 3 }}>
                    <SchoolIcon
                      sx={{
                        fontSize: 40,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      Internships
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Practical industry exposure
                    </Typography>

                  </Card>

                </Grid>


                <Grid item xs={6}>

                  <Card sx={{ p: 3 }}>
                    <BusinessIcon
                      sx={{
                        fontSize: 40,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      Industry
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Industry interaction
                    </Typography>

                  </Card>

                </Grid>


                <Grid item xs={6}>

                  <Card sx={{ p: 3 }}>
                    <CodeIcon
                      sx={{
                        fontSize: 40,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      Technical Skills
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Coding and development
                    </Typography>

                  </Card>

                </Grid>


                <Grid item xs={6}>

                  <Card sx={{ p: 3 }}>
                    <GroupsIcon
                      sx={{
                        fontSize: 40,
                        color: "#071952",
                      }}
                    />

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      Career Support
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Placement preparation
                    </Typography>

                  </Card>

                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          NEWS & EVENTS
      ===================================================== */}

      <Box
        id="news-&-events"
        sx={{
          backgroundColor: "#eef3fa",
          py: 10,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            fontWeight={800}
            textAlign="center"
            gutterBottom
          >
            News & Events
          </Typography>


          <Grid
            container
            spacing={3}
            sx={{ mt: 2 }}
          >

            {[
              {
                title:
                  "National Level Project Competition",
                icon: <EngineeringIcon />,
              },

              {
                title:
                  "Workshop on Artificial Intelligence",
                icon: <PsychologyIcon />,
              },

              {
                title:
                  "Industrial Visit",
                icon: <BusinessIcon />,
              },

            ].map((event) => (

              <Grid
                item
                xs={12}
                md={4}
                key={event.title}
              >

                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                  }}
                >

                  <CardContent>

                    <Avatar
                      sx={{
                        backgroundColor:
                          "#071952",
                        mb: 2,
                      }}
                    >
                      {event.icon}
                    </Avatar>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                    >
                      {event.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      Latest departmental
                      announcements and
                      student activities.
                    </Typography>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          DOWNLOADS / QUICK ACCESS
      ===================================================== */}

      <Box
        sx={{
          py: 8,
        }}
      >

        <Container>

          <Typography
            variant="h4"
            fontWeight={800}
            gutterBottom
          >
            Quick Access
          </Typography>


          <Grid
            container
            spacing={2}
          >

            {[
              "Syllabus",
              "Academic Calendar",
              "Timetable",
              "Question Papers",
              "Department Projects",
              "Downloads",
            ].map((item) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item}
              >

                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    justifyContent:
                      "space-between",
                    py: 1.5,
                  }}
                >
                  {item}
                </Button>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Box
        id="contact"
        sx={{
          backgroundColor: "#071952",
          color: "white",
          py: 9,
        }}
      >

        <Container>

          <Typography
            variant="h3"
            fontWeight={800}
            textAlign="center"
            gutterBottom
          >
            Contact Us
          </Typography>


          <Grid
            container
            spacing={4}
            sx={{ mt: 2 }}
          >

            <Grid item xs={12} md={4}>

              <Stack spacing={2}>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >

                  <LocationOnIcon />

                  <Typography>
                    D.Y. Patil College of
                    Engineering & Technology,
                    Kasaba Bawada,
                    Kolhapur - 416006,
                    Maharashtra, India
                  </Typography>

                </Box>


                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >

                  <PhoneIcon />

                  <Typography>
                    +91 91586 15999
                  </Typography>

                </Box>


                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >

                  <EmailIcon />

                  <Typography>
                    info.dypcet@dypgroup.edu.in
                  </Typography>

                </Box>

              </Stack>

            </Grid>


            <Grid item xs={12} md={8}>

              <Grid
                container
                spacing={2}
              >

                <Grid item xs={12} sm={6}>

                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    sx={{
                      backgroundColor:
                        "white",
                      borderRadius: 1,
                    }}
                  />

                </Grid>


                <Grid item xs={12} sm={6}>

                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{
                      backgroundColor:
                        "white",
                      borderRadius: 1,
                    }}
                  />

                </Grid>


                <Grid item xs={12}>

                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    sx={{
                      backgroundColor:
                        "white",
                      borderRadius: 1,
                    }}
                  />

                </Grid>


                <Grid item xs={12}>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor:
                        "white",
                      color: "#071952",
                    }}
                  >
                    Send Message
                  </Button>

                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Box
        sx={{
          backgroundColor: "#030d2b",
          color: "white",
          py: 4,
        }}
      >

        <Container>

          <Grid
            container
            spacing={3}
          >

            <Grid item xs={12} md={6}>

              <Typography
                variant="h6"
                fontWeight={800}
              >
                D.Y. PATIL
              </Typography>

              <Typography
                variant="body2"
                color="#aab7d4"
                sx={{ mt: 1 }}
              >
                Department of Computer Science
                & Engineering
              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography
                textAlign={{
                  xs: "left",
                  md: "right",
                }}
                variant="body2"
                color="#aab7d4"
              >
                © 2026 D.Y. Patil College of
                Engineering & Technology,
                Kolhapur.
              </Typography>

              <Typography
                textAlign={{
                  xs: "left",
                  md: "right",
                }}
                variant="body2"
                color="#aab7d4"
                sx={{ mt: 1 }}
              >
                Department of Computer Science
                & Engineering
              </Typography>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      <Fab
        size="medium"
        color="primary"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        sx={{
          position: "fixed",
          right: 25,
          bottom: 25,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>

    </Box>
  );
}


export default App;