import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Helmet } from 'react-helmet-async';

import { downloadsData } from '../../data/downloads';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';

export const DownloadsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Syllabus', 'Academic Calendar', 'Timetable', 'NBA/NAAC', 'Forms', 'Brochures'];

  const filteredDocs = useMemo(() => {
    return downloadsData.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.academicYear && doc.academicYear.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = categoryFilter === 'All' || doc.category === categoryFilter;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, categoryFilter]);

  return (
    <>
      <Helmet>
        <title>Downloads & Resources Repository | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Download official curriculum syllabi, academic calendars, timetables, NBA/NAAC compliance manuals, and departmental forms for DYPCET CSE."
        />
      </Helmet>

      <PageHeader
        title="Downloads & Academic Resources"
        subtitle="Centralized document repository for students, parents, faculty, and regulatory auditors."
        badge="Official Documents"
      />

      <SectionContainer>
        {/* Search & Filter Bar */}
        <Box sx={{ mb: 4, p: 2.5, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search document title, category, academic year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                select
                fullWidth
                size="small"
                label="Category Filter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FilterListIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              >
                {categories.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c === 'All' ? 'All Document Categories' : c}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>

        {/* Documents Table */}
        <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table aria-label="Downloads table">
            <TableHead sx={{ bgcolor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Document Title</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Category</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Academic Year</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">File Size</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredDocs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                    No documents matching your search criteria.
                  </TableCell>
                </TableRow>
              ) : (
                filteredDocs.map((doc) => (
                  <TableRow key={doc.id} hover>
                    <TableCell sx={{ fontWeight: 600 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <PictureAsPdfIcon sx={{ color: 'secondary.main', fontSize: 24 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {doc.title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={doc.category} size="small" variant="outlined" />
                    </TableCell>
                    <TableCell>{doc.academicYear || 'Permanent'}</TableCell>
                    <TableCell align="center">{doc.size || '—'}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<DownloadIcon />}
                        component="a"
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
                      >
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionContainer>
    </>
  );
};
