import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  InputAdornment,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import { Helmet } from 'react-helmet-async';

import { useFaculty } from '../../hooks/useFaculty';
import { useDepartment } from '../../hooks/useDepartment';
import { departmentCommitteesData } from '../../data/committees';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';
import { FacultyCard } from '../../components/common/FacultyCard';
import { PlaceholderNotice } from '../../components/layout/PlaceholderNotice';

export const PeoplePage: React.FC = () => {
  const facultyList = useFaculty();
  const dept = useDepartment();

  const [searchQuery, setSearchQuery] = useState('');
  const [designationFilter, setDesignationFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'seniority' | 'alphabetical'>('seniority');

  const filteredFaculty = useMemo(() => {
    return facultyList
      .filter((member) => {
        const matchesSearch =
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.specialization.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesDesignation =
          designationFilter === 'All' ||
          (designationFilter === 'Professor' && member.designation.includes('Professor') && !member.designation.includes('Associate') && !member.designation.includes('Assistant')) ||
          (designationFilter === 'Associate Professor' && member.designation.includes('Associate')) ||
          (designationFilter === 'Assistant Professor' && member.designation.includes('Assistant'));

        return matchesSearch && matchesDesignation;
      })
      .sort((a, b) => {
        if (sortBy === 'alphabetical') {
          return a.name.localeCompare(b.name);
        }
        return (a.order || 0) - (b.order || 0);
      });
  }, [facultyList, searchQuery, designationFilter, sortBy]);

  return (
    <>
      <Helmet>
        <title>Faculty & Staff Directory | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Meet the 28 distinguished faculty members, researchers, and technical staff in the Department of Computer Science & Engineering at DYPCET Kolhapur."
        />
      </Helmet>

      <PageHeader
        title="People & Faculty Directory"
        subtitle="Our team of 28 distinguished academicians, researchers, and technical mentors driving student excellence."
        badge="Academic Roster"
      />

      {/* Dedicated HOD Profile Spotlight (#hod) */}
      <SectionContainer id="hod" title="Head of Department Spotlight" overline="Leadership">
        <Card
          sx={{
            p: { xs: 3, md: 4 },
            border: '2px solid',
            borderColor: 'secondary.main',
            boxShadow: '0 8px 30px rgba(128, 0, 32, 0.1)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'center' }}>
              <Avatar
                src={dept.hod.photoUrl}
                alt={dept.hod.name}
                sx={{
                  width: { xs: 150, md: 180 },
                  height: { xs: 150, md: 180 },
                  mx: 'auto',
                  mb: 2,
                  border: '4px solid',
                  borderColor: 'secondary.main',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}
              />
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                {dept.hod.name}
              </Typography>
              <Chip
                label={dept.hod.designation}
                sx={{ bgcolor: 'secondary.main', color: '#ffffff', fontWeight: 700, mb: 1 }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                {dept.hod.qualification}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={8} md={9}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                {dept.hod.deskTitle}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                {dept.hod.message}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    rjdhnal.dypcet@dypgroup.edu.in
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WorkIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Specialization: Machine Learning, Cloud & Distributed Systems
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </SectionContainer>

      {/* Faculty Directory Search & Filter Controls */}
      <SectionContainer
        title="Faculty Members Roster (28 Faculty)"
        subtitle="Filter by designation, search by research specialization, or sort by seniority"
        overline="Full Department Roster"
        bgAlt
      >
        <Box sx={{ mb: 4, p: 2.5, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={5}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search faculty name, qualification, specialization..."
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
            <Grid item xs={6} md={3.5}>
              <TextField
                select
                fullWidth
                size="small"
                label="Designation"
                value={designationFilter}
                onChange={(e) => setDesignationFilter(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FilterListIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="All">All Designations</MenuItem>
                <MenuItem value="Professor">Professors</MenuItem>
                <MenuItem value="Associate Professor">Associate Professors</MenuItem>
                <MenuItem value="Assistant Professor">Assistant Professors</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6} md={3.5}>
              <TextField
                select
                fullWidth
                size="small"
                label="Sort Order"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SortIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              >
                <MenuItem value="seniority">Seniority (Official Order)</MenuItem>
                <MenuItem value="alphabetical">Alphabetical (A - Z)</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Box>

        {filteredFaculty.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
              No faculty matching "{searchQuery}"
            </Typography>
            <Button variant="outlined" onClick={() => { setSearchQuery(''); setDesignationFilter('All'); }}>
              Reset Search Filters
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredFaculty.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
                <FacultyCard faculty={member} />
              </Grid>
            ))}
          </Grid>
        )}
      </SectionContainer>

      {/* Technical & Non-Teaching Staff */}
      <SectionContainer
        title="Technical & Laboratory Support Staff"
        subtitle="Qualified technical personnel managing lab infrastructure, hardware systems, and student practical setups"
        overline="Laboratory Personnel"
      >
        <Grid container spacing={3}>
          {[
            { name: 'Mr. S. M. Kulkarni', role: 'Senior Laboratory Assistant', lab: 'Central Computing Facility & Systems', qual: 'Diploma in Computer Engg.' },
            { name: 'Mr. P. R. Patil', role: 'Technical Assistant', lab: 'Java & Web Technology Labs', qual: 'B.Sc. (Computer Science)' },
            { name: 'Mrs. S. A. Bhosale', role: 'Laboratory Assistant', lab: 'Database & R Programming Labs', qual: 'Diploma in IT' },
            { name: 'Mr. V. B. Shinde', role: 'Network & Hardware Support Technician', lab: 'Department Server Room & CCF', qual: 'Hardware & Networking Cert.' },
          ].map((staff, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ height: '100%', p: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {staff.name}
                </Typography>
                <Chip label={staff.role} size="small" sx={{ mb: 1, bgcolor: 'primary.light', color: '#ffffff' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  {staff.lab}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {staff.qual}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Department Statutory Committees (#committees) */}
      <SectionContainer
        id="committees"
        title="Departmental Committees & Cells"
        subtitle="Committees overseeing student grievances, anti-ragging compliance, and NBA accreditation"
        overline="Institutional Committees"
        bgAlt
      >
        <Grid container spacing={3}>
          {departmentCommitteesData.map((comm) => (
            <Grid item xs={12} md={6} key={comm.id}>
              <Card sx={{ height: '100%', p: 2.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  {comm.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {comm.description}
                </Typography>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1.5, mb: 2 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block' }}>
                    Coordinator:
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {comm.coordinator}
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', display: 'block', mb: 0.5 }}>
                  Committee Members:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                  {comm.members.map((m, i) => (
                    <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {m.name}
                      </Typography>
                      <Chip label={m.role} size="small" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                    </Box>
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
};
