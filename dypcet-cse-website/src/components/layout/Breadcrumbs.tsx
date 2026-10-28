import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, Typography, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

const routeNames: Record<string, string> = {
  about: 'About Department',
  academics: 'Academics & Syllabus',
  people: 'Faculty & Staff',
  research: 'Research & Innovation',
  facilities: 'Labs & Infrastructure',
  admissions: 'Admissions & Intake',
  placements: 'Placements & Training',
  'student-corner': 'Student Corner & Clubs',
  gallery: 'Photo & Video Gallery',
  downloads: 'Downloads & Documents',
  contact: 'Contact Us',
};

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <Box sx={{ py: 1.5 }}>
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(255,255,255,0.6)' }} />}
        aria-label="breadcrumb"
      >
        <MuiLink
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            '&:hover': { color: '#ffffff', textDecoration: 'underline' },
          }}
        >
          <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} />
          Home
        </MuiLink>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const title = routeNames[value] || value.replace(/-/g, ' ');

          return last ? (
            <Typography
              key={to}
              sx={{
                color: '#d4af37',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              {title}
            </Typography>
          ) : (
            <MuiLink
              component={RouterLink}
              to={to}
              key={to}
              sx={{
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                textTransform: 'capitalize',
                '&:hover': { color: '#ffffff', textDecoration: 'underline' },
              }}
            >
              {title}
            </MuiLink>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};
