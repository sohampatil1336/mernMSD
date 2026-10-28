import React from 'react';
import { Container, Box, Typography } from '@mui/material';

interface SectionContainerProps {
  id?: string;
  title?: string;
  subtitle?: string;
  overline?: string;
  children: React.ReactNode;
  maxWidth?: 'lg' | 'xl' | 'md' | false;
  bgAlt?: boolean;
  sx?: object;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  overline,
  children,
  maxWidth = 'lg',
  bgAlt = false,
  sx = {},
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        backgroundColor: bgAlt
          ? (theme) => (theme.palette.mode === 'light' ? '#f1f5f9' : '#0a1324')
          : 'background.default',
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth}>
        {(title || subtitle || overline) && (
          <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', maxWidth: 840, mx: 'auto' }}>
            {overline && (
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 700,
                  display: 'block',
                  mb: 1,
                  letterSpacing: '0.12em',
                }}
              >
                {overline}
              </Typography>
            )}
            {title && (
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: 'text.primary',
                  fontWeight: 700,
                  mb: subtitle ? 1.5 : 0,
                }}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem' }}>
                {subtitle}
              </Typography>
            )}
            <Box
              sx={{
                width: 60,
                height: 3,
                backgroundColor: 'warning.main',
                mx: 'auto',
                mt: 2.5,
                borderRadius: 2,
              }}
            />
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};
