import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, CircularProgress, Container } from '@mui/material';

// Lazy-loaded routes for optimal bundle code-splitting
const HomePage = lazy(() => import('../pages/Home').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('../pages/About').then((m) => ({ default: m.AboutPage })));
const AcademicsPage = lazy(() => import('../pages/Academics').then((m) => ({ default: m.AcademicsPage })));
const PeoplePage = lazy(() => import('../pages/People').then((m) => ({ default: m.PeoplePage })));
const ResearchPage = lazy(() => import('../pages/Research').then((m) => ({ default: m.ResearchPage })));
const FacilitiesPage = lazy(() => import('../pages/Facilities').then((m) => ({ default: m.FacilitiesPage })));
const AdmissionsPage = lazy(() => import('../pages/Admissions').then((m) => ({ default: m.AdmissionsPage })));
const PlacementsPage = lazy(() => import('../pages/Placements').then((m) => ({ default: m.PlacementsPage })));
const StudentCornerPage = lazy(() => import('../pages/StudentCorner').then((m) => ({ default: m.StudentCornerPage })));
const GalleryPage = lazy(() => import('../pages/Gallery').then((m) => ({ default: m.GalleryPage })));
const DownloadsPage = lazy(() => import('../pages/Downloads').then((m) => ({ default: m.DownloadsPage })));
const ContactPage = lazy(() => import('../pages/Contact').then((m) => ({ default: m.ContactPage })));

const LoadingFallback = () => (
  <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <CircularProgress color="primary" />
  </Box>
);

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/student-corner" element={<StudentCornerPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
