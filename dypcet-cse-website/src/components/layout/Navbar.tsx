import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolIcon from '@mui/icons-material/School';
import { useAppTheme } from '../../theme/ThemeProvider';

export const Navbar: React.FC = () => {
  const { mode, toggleColorMode } = useAppTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop Menu Anchor states
  const [academicsAnchor, setAcademicsAnchor] = useState<null | HTMLElement>(null);
  const [peopleAnchor, setPeopleAnchor] = useState<null | HTMLElement>(null);
  const [facilitiesAnchor, setFacilitiesAnchor] = useState<null | HTMLElement>(null);

  // Mobile Accordion open states
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobilePeopleOpen, setMobilePeopleOpen] = useState(false);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setAcademicsAnchor(null);
    setPeopleAnchor(null);
    setFacilitiesAnchor(null);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Academics',
      path: '/academics',
      hasSubmenu: true,
      subItems: [
        { label: 'Overview & Curriculum', path: '/academics' },
        { label: 'Syllabus Archive', path: '/academics#syllabus' },
        { label: 'Academic Regulations', path: '/academics#regulations' },
        { label: 'Admissions & Intake', path: '/admissions' },
      ],
    },
    {
      label: 'People',
      path: '/people',
      hasSubmenu: true,
      subItems: [
        { label: 'Faculty Directory', path: '/people' },
        { label: 'Head of Department', path: '/people#hod' },
        { label: 'Board of Studies (BoS)', path: '/about#bos' },
        { label: 'Department Committees', path: '/people#committees' },
      ],
    },
    {
      label: 'Facilities',
      path: '/facilities',
      hasSubmenu: true,
      subItems: [
        { label: '12 Computing Labs', path: '/facilities' },
        { label: 'Central Computing Facility', path: '/facilities#ccf' },
        { label: 'Digital Library Resources', path: '/facilities#library' },
      ],
    },
    { label: 'Research', path: '/research' },
    { label: 'Placements', path: '/placements' },
    { label: 'Student Corner', path: '/student-corner' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Persistent Utility Bar */}
      <Box
        sx={{
          backgroundColor: '#061933',
          color: '#ffffff',
          py: 0.6,
          px: 2,
          fontSize: '0.78rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {/* Accreditation Badges */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#d4af37', fontWeight: 700 }}>
                <SchoolIcon sx={{ fontSize: 16 }} />
                <span>Autonomous Institute</span>
              </Box>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ color: '#81c784', fontWeight: 600 }}>NAAC 'A' Grade</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ color: '#90caf9', fontWeight: 600 }}>NBA Accredited Dept</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ opacity: 0.8 }}>Affiliated to Shivaji University</span>
            </Stack>

            {/* Contacts & Controls */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
              <Box
                component="a"
                href="tel:+912312601431"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': { color: '#d4af37' },
                }}
              >
                <PhoneInTalkOutlinedIcon sx={{ fontSize: 14 }} />
                <span style={{ display: 'inline-block' }}>+91-231-2601431</span>
              </Box>
              <Box
                component="a"
                href="mailto:info.dypcet@dypgroup.edu.in"
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': { color: '#d4af37' },
                }}
              >
                <EmailOutlinedIcon sx={{ fontSize: 14 }} />
                <span>info.dypcet@dypgroup.edu.in</span>
              </Box>
              <IconButton
                size="small"
                onClick={toggleColorMode}
                sx={{ color: '#ffffff', p: 0.3 }}
                aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
              >
                {mode === 'dark' ? <Brightness7Icon sx={{ fontSize: 16 }} /> : <Brightness4Icon sx={{ fontSize: 16 }} />}
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(15, 27, 48, 0.98)',
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transition: 'all 0.25s ease',
          top: 0,
          zIndex: 1100,
        }}
        elevation={scrolled ? 4 : 0}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: scrolled ? { xs: 60, md: 68 } : { xs: 68, md: 78 },
              transition: 'min-height 0.25s ease',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/* College & Department Brand Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Box
                component="img"
                src="https://pub-c398185b3af042318383473fdcadf890.r2.dev/DYPCET%20LOGOS/DYPCET.png"
                alt="DYPCET Logo"
                sx={{
                  height: { xs: 44, md: 54 },
                  width: 'auto',
                  objectFit: 'contain',
                }}
                onError={(e: any) => {
                  e.target.style.display = 'none';
                }}
              />
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: 'primary.main',
                    fontFamily: "'Merriweather', serif",
                    fontSize: { xs: '0.95rem', md: '1.15rem' },
                  }}
                >
                  DYPCET KOLHAPUR
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: 'secondary.main',
                    display: 'block',
                    fontSize: { xs: '0.72rem', md: '0.8rem' },
                  }}
                >
                  Computer Science & Engineering
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation Links */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.path;

                  if (item.label === 'Academics') {
                    return (
                      <React.Fragment key={item.label}>
                        <Button
                          endIcon={<ExpandMore sx={{ fontSize: 16 }} />}
                          onClick={(e) => setAcademicsAnchor(e.currentTarget)}
                          sx={{
                            color: isActive ? 'primary.main' : 'text.primary',
                            fontWeight: isActive ? 700 : 600,
                            fontSize: '0.88rem',
                            px: 1.2,
                            borderBottom: isActive ? '2px solid' : 'none',
                            borderColor: 'warning.main',
                            borderRadius: 0,
                          }}
                        >
                          {item.label}
                        </Button>
                        <Menu
                          anchorEl={academicsAnchor}
                          open={Boolean(academicsAnchor)}
                          onClose={() => setAcademicsAnchor(null)}
                          sx={{ mt: 1 }}
                        >
                          {item.subItems?.map((sub) => (
                            <MenuItem
                              key={sub.label}
                              onClick={() => {
                                setAcademicsAnchor(null);
                                navigate(sub.path);
                              }}
                              sx={{ fontSize: '0.9rem', py: 1 }}
                            >
                              {sub.label}
                            </MenuItem>
                          ))}
                        </Menu>
                      </React.Fragment>
                    );
                  }

                  if (item.label === 'People') {
                    return (
                      <React.Fragment key={item.label}>
                        <Button
                          endIcon={<ExpandMore sx={{ fontSize: 16 }} />}
                          onClick={(e) => setPeopleAnchor(e.currentTarget)}
                          sx={{
                            color: isActive ? 'primary.main' : 'text.primary',
                            fontWeight: isActive ? 700 : 600,
                            fontSize: '0.88rem',
                            px: 1.2,
                            borderBottom: isActive ? '2px solid' : 'none',
                            borderColor: 'warning.main',
                            borderRadius: 0,
                          }}
                        >
                          {item.label}
                        </Button>
                        <Menu
                          anchorEl={peopleAnchor}
                          open={Boolean(peopleAnchor)}
                          onClose={() => setPeopleAnchor(null)}
                          sx={{ mt: 1 }}
                        >
                          {item.subItems?.map((sub) => (
                            <MenuItem
                              key={sub.label}
                              onClick={() => {
                                setPeopleAnchor(null);
                                navigate(sub.path);
                              }}
                              sx={{ fontSize: '0.9rem', py: 1 }}
                            >
                              {sub.label}
                            </MenuItem>
                          ))}
                        </Menu>
                      </React.Fragment>
                    );
                  }

                  if (item.label === 'Facilities') {
                    return (
                      <React.Fragment key={item.label}>
                        <Button
                          endIcon={<ExpandMore sx={{ fontSize: 16 }} />}
                          onClick={(e) => setFacilitiesAnchor(e.currentTarget)}
                          sx={{
                            color: isActive ? 'primary.main' : 'text.primary',
                            fontWeight: isActive ? 700 : 600,
                            fontSize: '0.88rem',
                            px: 1.2,
                            borderBottom: isActive ? '2px solid' : 'none',
                            borderColor: 'warning.main',
                            borderRadius: 0,
                          }}
                        >
                          {item.label}
                        </Button>
                        <Menu
                          anchorEl={facilitiesAnchor}
                          open={Boolean(facilitiesAnchor)}
                          onClose={() => setFacilitiesAnchor(null)}
                          sx={{ mt: 1 }}
                        >
                          {item.subItems?.map((sub) => (
                            <MenuItem
                              key={sub.label}
                              onClick={() => {
                                setFacilitiesAnchor(null);
                                navigate(sub.path);
                              }}
                              sx={{ fontSize: '0.9rem', py: 1 }}
                            >
                              {sub.label}
                            </MenuItem>
                          ))}
                        </Menu>
                      </React.Fragment>
                    );
                  }

                  return (
                    <Button
                      key={item.label}
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        color: isActive ? 'primary.main' : 'text.primary',
                        fontWeight: isActive ? 700 : 600,
                        fontSize: '0.88rem',
                        px: 1.2,
                        borderBottom: isActive ? '2px solid' : 'none',
                        borderColor: 'warning.main',
                        borderRadius: 0,
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>
            ) : (
              /* Mobile Hamburger Button */
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon sx={{ fontSize: 28 }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: { width: 300, bgcolor: 'background.paper', p: 2 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            DYPCET CSE
          </Typography>
          <IconButton aria-label="close menu" onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <List dense>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/about" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>

          {/* Mobile Academics Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}>
              <ListItemText primary="Academics" />
              {mobileAcademicsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={mobileAcademicsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton component={RouterLink} to="/academics" onClick={() => setMobileOpen(false)}>
                <ListItemText secondary="Overview & Curriculum" />
              </ListItemButton>
              <ListItemButton component={RouterLink} to="/admissions" onClick={() => setMobileOpen(false)}>
                <ListItemText secondary="Admissions & Eligibility" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Mobile People Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setMobilePeopleOpen(!mobilePeopleOpen)}>
              <ListItemText primary="People" />
              {mobilePeopleOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={mobilePeopleOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton component={RouterLink} to="/people" onClick={() => setMobileOpen(false)}>
                <ListItemText secondary="Faculty Roster" />
              </ListItemButton>
              <ListItemButton component={RouterLink} to="/people#hod" onClick={() => setMobileOpen(false)}>
                <ListItemText secondary="Head of Department" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Mobile Facilities Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setMobileFacilitiesOpen(!mobileFacilitiesOpen)}>
              <ListItemText primary="Facilities" />
              {mobileFacilitiesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={mobileFacilitiesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              <ListItemButton component={RouterLink} to="/facilities" onClick={() => setMobileOpen(false)}>
                <ListItemText secondary="12 Computing Laboratories" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/research" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Research & Innovation" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/placements" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Placements" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/student-corner" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Student Corner" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/gallery" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Gallery" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/downloads" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Downloads" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/contact" onClick={() => setMobileOpen(false)}>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
