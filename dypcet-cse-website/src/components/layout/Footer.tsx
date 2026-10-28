import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, Stack, Divider, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#061933',
        color: '#ffffff',
        pt: { xs: 6, md: 8 },
        pb: 4,
        borderTop: '4px solid',
        borderColor: 'warning.main',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Column 1: Institutional Overview */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                component="img"
                src="https://pub-c398185b3af042318383473fdcadf890.r2.dev/DYPCET%20LOGOS/DYPCET.png"
                alt="DYPCET Logo"
                sx={{ height: 48, filter: 'brightness(0) invert(1)' }}
                onError={(e: any) => { e.target.style.display = 'none'; }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                  DYPCET KOLHAPUR
                </Typography>
                <Typography variant="caption" sx={{ color: '#d4af37', fontWeight: 700 }}>
                  Computer Science & Engineering
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2, lineHeight: 1.65 }}>
              D. Y. Patil College of Engineering & Technology (Autonomous), Kolhapur, established in 1984, is affiliated to Shivaji University, accredited with 'A' Grade by NAAC, and its B.Tech CSE program is accredited by NBA.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/dypatilkolhapur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DYPCET LinkedIn"
                sx={{ color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)', '&:hover': { bgcolor: 'primary.light' } }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/@dypcetofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DYPCET YouTube"
                sx={{ color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)', '&:hover': { bgcolor: 'secondary.main' } }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/dypcet_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DYPCET Instagram"
                sx={{ color: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)', '&:hover': { bgcolor: '#e1306c' } }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="subtitle2" sx={{ color: '#d4af37', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Academics
            </Typography>
            <Stack spacing={1}>
              {[
                { label: 'Department Overview', to: '/about' },
                { label: 'Curriculum & CBCS', to: '/academics' },
                { label: 'Syllabus Archive', to: '/academics#syllabus' },
                { label: 'Admissions (360 Intake)', to: '/admissions' },
                { label: 'Placements (64 LPA)', to: '/placements' },
                { label: 'Academic Calendar', to: '/downloads' },
              ].map((link) => (
                <MuiLink
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    '&:hover': { color: '#ffffff', textDecoration: 'underline' },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: People & Facilities */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="subtitle2" sx={{ color: '#d4af37', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Department
            </Typography>
            <Stack spacing={1}>
              {[
                { label: 'Faculty Directory (28 Members)', to: '/people' },
                { label: 'Head of Department Desk', to: '/people#hod' },
                { label: '12 Computing Laboratories', to: '/facilities' },
                { label: 'Research & Publications', to: '/research' },
                { label: 'Student Chapters & Clubs', to: '/student-corner' },
                { label: 'Central Downloads Repository', to: '/downloads' },
              ].map((link) => (
                <MuiLink
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    '&:hover': { color: '#ffffff', textDecoration: 'underline' },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact & Statutory Details */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="subtitle2" sx={{ color: '#d4af37', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Campus Contact
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 18, color: '#d4af37', mt: 0.3 }} />
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                  Kasaba Bawada, Kolhapur, Maharashtra 416006, India.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneInTalkOutlinedIcon sx={{ fontSize: 18, color: '#d4af37' }} />
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  +91-231-2601431 / +91-91586-15999
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailOutlinedIcon sx={{ fontSize: 18, color: '#d4af37' }} />
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  info.dypcet@dypgroup.edu.in
                </Typography>
              </Box>
              <Box sx={{ pt: 1 }}>
                <MuiLink
                  href="https://coek.dypgroup.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#d4af37',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  DYPCET Main College Portal <OpenInNewIcon sx={{ fontSize: 14 }} />
                </MuiLink>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

        {/* Accreditation & Copyright Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', display: 'block' }}>
              © {new Date().getFullYear()} Department of Computer Science & Engineering, D. Y. Patil College of Engineering & Technology, Kolhapur.
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>
              Autonomous Institute | Affiliated to Shivaji University | NAAC 'A' Grade | NBA Tier-II Accredited (Valid up to 30-06-2026) | DTE Code: 6282
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: '#d4af37', fontWeight: 600 }}>
            Official Institutional Department Portal
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
