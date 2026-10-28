import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Avatar,
  Stack,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import DownloadIcon from '@mui/icons-material/Download';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Helmet } from 'react-helmet-async';

import { usePlacements } from '../../hooks/usePlacements';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';

export const PlacementsPage: React.FC = () => {
  const { statistics, recruiters, notable, reportPdf } = usePlacements();

  const chartYears = [...statistics].reverse().map((s) => s.year);
  const chartPlaced = [...statistics].reverse().map((s) => s.studentsPlaced);
  const chartHighest = [...statistics].reverse().map((s) => s.highestPackageLPA);
  const chartAverage = [...statistics].reverse().map((s) => s.averagePackageLPA);

  return (
    <>
      <Helmet>
        <title>Placements & Training Reports (64 LPA Highest) | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Official placement statistics, year-wise trends, recruiters, and highest package (64 LPA Adobe) of the Department of Computer Science & Engineering, DYPCET Kolhapur."
        />
      </Helmet>

      <PageHeader
        title="Placements & Corporate Relations"
        subtitle="Remarkable career milestones powered by industry-centric training, technical hackathons, and 100+ global recruiters."
        badge="₹ 64 LPA Highest Offer"
      />

      {/* Headline Placement Banner */}
      <SectionContainer>
        <Card
          sx={{
            background: 'linear-gradient(135deg, #800020 0%, #a31538 50%, #4f0013 100%)',
            color: '#ffffff',
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            boxShadow: '0 12px 36px rgba(128,0,32,0.25)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <MilitaryTechIcon sx={{ color: '#d4af37', fontSize: 32 }} />
                <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 800, letterSpacing: '0.1em' }}>
                  Historic Placement Record
                </Typography>
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 1.5, color: '#ffffff' }}>
                ₹ 64.0 Lakhs Per Annum (Adobe)
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2, fontWeight: 500 }}>
                Secured by Ms. Anamika Dakare (Final Year B.Tech CSE, Batch 2024-25)
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 640, lineHeight: 1.65 }}>
                DYPCET CSE students consistently secure Dream & Super Dream placement opportunities across global technology product companies, with the top 10% average package crossing ₹ 6.3 LPA.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button
                variant="contained"
                size="large"
                component="a"
                href={reportPdf}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
                sx={{
                  bgcolor: '#ffffff',
                  color: '#800020',
                  fontWeight: 800,
                  py: 1.5,
                  px: 3,
                  '&:hover': { bgcolor: '#f0f0f0' },
                }}
              >
                Download Official Placement List PDF
              </Button>
            </Grid>
          </Grid>
        </Card>
      </SectionContainer>

      {/* Interactive Trend Charts with MUI X-Charts */}
      <SectionContainer
        title="Multi-Year Placement Performance Trends"
        subtitle="5-year historical analysis of students placed, highest compensation, and average package trajectories"
        overline="Data Analytics"
        bgAlt
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <BusinessIcon sx={{ color: 'primary.main' }} />
                Students Placed (Year-on-Year)
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                Number of B.Tech CSE students recruited annually across campus drives
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <BarChart
                  xAxis={[{ scaleType: 'band', data: chartYears }]}
                  series={[{ data: chartPlaced, label: 'Students Placed', color: '#0b2850' }]}
                  height={280}
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <TrendingUpIcon sx={{ color: 'secondary.main' }} />
                Salary Trends (Highest vs. Average CTC in LPA)
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                CTC package growth trend over the last 5 graduating batches
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <LineChart
                  xAxis={[{ scaleType: 'point', data: chartYears }]}
                  series={[
                    { data: chartHighest, label: 'Highest Package (LPA)', color: '#800020' },
                    { data: chartAverage, label: 'Average Package (LPA)', color: '#d4af37' },
                  ]}
                  height={280}
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Year-Wise Statistics Table */}
      <SectionContainer
        title="Year-Wise Comprehensive Placement Records"
        subtitle="Audited campus recruitment statistics for the Department of Computer Science & Engineering"
        overline="Official Placement Data"
      >
        <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table aria-label="Placement statistics table">
            <TableHead sx={{ bgcolor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Academic Year</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Companies Visited</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Students Registered</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Students Placed</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Placement %</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Highest CTC (LPA)</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Avg. CTC (LPA)</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Marquee Recruiter</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statistics.map((row) => (
                <TableRow key={row.year} hover>
                  <TableCell sx={{ fontWeight: 700 }}>{row.year}</TableCell>
                  <TableCell align="center">{row.companiesVisited}+</TableCell>
                  <TableCell align="center">{row.studentsRegistered}</TableCell>
                  <TableCell align="center">
                    <strong>{row.studentsPlaced}</strong>
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={`${row.placementPercentage}%`}
                      size="small"
                      sx={{ bgcolor: 'success.light', color: '#0d3813', fontWeight: 700 }}
                    />
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                    ₹ {row.highestPackageLPA} LPA
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    ₹ {row.averagePackageLPA} LPA
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{row.topOfferCompany}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionContainer>

      {/* Top Recruiters Wall */}
      <SectionContainer
        title="Premier Recruiters & Corporate Partners"
        subtitle="Prominent national and multinational corporations regularly hiring from DYPCET CSE"
        overline="Recruiter Wall"
        bgAlt
      >
        <Grid container spacing={2}>
          {recruiters.map((rec, i) => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <Card
                sx={{
                  p: 2.5,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'warning.main',
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                  {rec.name}
                </Typography>
                <Chip
                  label={rec.tier}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: '0.7rem',
                    color: rec.tier === 'Super Dream' ? '#800020' : '#0b2850',
                    borderColor: rec.tier === 'Super Dream' ? '#800020' : '#0b2850',
                    fontWeight: 600,
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Notable Alumni & Student Testimonials */}
      <SectionContainer
        title="Notable Recent Placements"
        subtitle="Celebrating students who achieved dream offers across global technical roles"
        overline="Student Hall of Fame"
      >
        <Grid container spacing={3}>
          {notable.map((student, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ p: 2.5, height: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ width: 56, height: 56, bgcolor: 'secondary.main', fontWeight: 700 }}>
                  {student.studentName.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {student.studentName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {student.companyName}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                    <Chip
                      label={`₹ ${student.packageLPA} LPA`}
                      size="small"
                      sx={{ bgcolor: 'warning.main', color: '#1a1a1a', fontWeight: 800 }}
                    />
                    <Chip label={student.batch} size="small" variant="outlined" />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
};
