import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Box } from '@mui/material';

import { ThemeProvider } from './theme/ThemeProvider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRouter } from './routes/AppRouter';
import { ScrollToTop } from './components/layout/ScrollToTop';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              bgcolor: 'background.default',
              color: 'text.primary',
            }}
          >
            {/* Skip to Content accessible link */}
            <Box
              component="a"
              href="#main-content"
              sx={{
                position: 'absolute',
                top: -100,
                left: 16,
                bgcolor: 'primary.main',
                color: '#ffffff',
                p: 1.5,
                zIndex: 2000,
                fontWeight: 700,
                borderRadius: 1,
                textDecoration: 'none',
                '&:focus': {
                  top: 16,
                },
              }}
            >
              Skip to main content
            </Box>

            <Navbar />
            <Box component="main" id="main-content" sx={{ flexGrow: 1 }}>
              <AppRouter />
            </Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
