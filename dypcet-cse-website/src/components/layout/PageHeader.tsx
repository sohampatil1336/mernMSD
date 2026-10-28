import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Breadcrumbs } from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, badge }) => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #061933 0%, #0b2850 60%, #153e77 100%)',
        color: '#ffffff',
        pt: { xs: 4, md: 5 },
        pb: { xs: 4, md: 5 },
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '3px solid',
        borderColor: 'warning.main',
      }}
    >
      {/* Decorative background shape */}
      <Box
        sx={{
          position: 'absolute',
          right: -50,
          top: -50,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg">
        <Breadcrumbs />
        {badge && (
          <Typography
            variant="overline"
            sx={{
              display: 'inline-block',
              px: 1.5,
              py: 0.3,
              borderRadius: 1,
              bgcolor: 'rgba(212, 175, 55, 0.2)',
              color: '#d4af37',
              fontWeight: 700,
              mb: 1,
            }}
          >
            {badge}
          </Typography>
        )}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.8rem' },
            color: '#ffffff',
            mb: subtitle ? 1 : 0,
            fontFamily: "'Merriweather', Georgia, serif",
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: 780,
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
};
