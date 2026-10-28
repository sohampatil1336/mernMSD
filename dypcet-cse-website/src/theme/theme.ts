/**
 * ============================================================================
 * DYPCET CSE DEPARTMENT — FORMAL DESIGN SYSTEM & STYLE GUIDE
 * ============================================================================
 * Institution: D. Y. Patil College of Engineering & Technology (DYPCET), Kolhapur
 * Accreditation: Autonomous Institute, NAAC 'A' Grade, NBA Accredited
 *
 * 1. COLOR PALETTE:
 *    - Primary (DYPCET Institutional Blue):
 *      main: #0b2850, light: #1c437a, dark: #061933, contrastText: #ffffff
 *    - Secondary (Academic Maroon/Burgundy):
 *      main: #800020, light: #a31538, dark: #520014, contrastText: #ffffff
 *    - Accent (Heritage Gold):
 *      main: #d4af37, light: #e6c86e, dark: #9f8223, contrastText: #1a1a1a
 *    - Status & Neutral:
 *      Success: #1b5e20, Warning: #b26a00, Error: #c62828, Info: #0277bd
 *      Background Light: #f8fafc (Slate neutral), Paper Light: #ffffff
 *      Background Dark: #080e1a, Paper Dark: #0f1b30
 *
 * 2. TYPOGRAPHY:
 *    - Headings: 'Merriweather', Georgia, serif (Institutional gravitas & dignity)
 *    - Body & UI: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
 *
 * 3. ELEVATION & BORDERS:
 *    - Clean, modern cards with shallow shadows and crisp 1px borders.
 *    - Standard border-radius: 10px (cards), 6px (buttons & chips).
 *
 * 4. ACCESSIBILITY:
 *    - Strict WCAG 2.1 AA compliance across all light and dark mode variants.
 * ============================================================================
 */

import { createTheme, type ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#0b2850',
      light: '#1e488f',
      dark: '#05162e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#800020',
      light: '#a81c3b',
      dark: '#4f0013',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#d4af37',
      light: '#e8cb6d',
      dark: '#997d1e',
      contrastText: '#1a1a1a',
    },
    success: {
      main: '#1b5e20',
      light: '#388e3c',
      dark: '#0d3813',
      contrastText: '#ffffff',
    },
    error: {
      main: '#c62828',
      light: '#e53935',
      dark: '#8e0000',
    },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#080e1a',
      paper: mode === 'light' ? '#ffffff' : '#0f1b30',
    },
    text: {
      primary: mode === 'light' ? '#0f172a' : '#f1f5f9',
      secondary: mode === 'light' ? '#475569' : '#94a3b8',
    },
    divider: mode === 'light' ? 'rgba(15, 23, 42, 0.08)' : 'rgba(241, 245, 249, 0.12)',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Merriweather', Georgia, serif",
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.25,
      letterSpacing: '-0.02em',
      '@media (min-width:600px)': { fontSize: '3.2rem' },
    },
    h2: {
      fontFamily: "'Merriweather', Georgia, serif",
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
      '@media (min-width:600px)': { fontSize: '2.4rem' },
    },
    h3: {
      fontFamily: "'Merriweather', Georgia, serif",
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: 1.35,
    },
    h4: {
      fontFamily: "'Merriweather', Georgia, serif",
      fontWeight: 600,
      fontSize: '1.3rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1.15rem',
      lineHeight: 1.45,
    },
    h6: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1.05rem',
      lineHeight: 1.6,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.9rem',
      lineHeight: 1.55,
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
      letterSpacing: '0.02em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          transition: 'background-color 0.25s ease, color 0.25s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: mode === 'light' ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(241, 245, 249, 0.1)',
          boxShadow: mode === 'light'
            ? '0 2px 8px -2px rgba(11, 40, 80, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)'
            : '0 4px 14px -3px rgba(0, 0, 0, 0.5)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            borderColor: mode === 'light' ? 'rgba(11, 40, 80, 0.25)' : 'rgba(212, 175, 55, 0.35)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 20px',
          fontWeight: 600,
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0b2850 0%, #153e77 100%)',
          boxShadow: '0 2px 6px rgba(11, 40, 80, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #061933 0%, #0b2850 100%)',
            boxShadow: '0 4px 12px rgba(11, 40, 80, 0.35)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #800020 0%, #a31538 100%)',
          boxShadow: '0 2px 6px rgba(128, 0, 32, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #520014 0%, #800020 100%)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode));
