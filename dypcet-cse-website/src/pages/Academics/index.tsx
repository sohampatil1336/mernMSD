import React, { useState } from 'react';
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
  Tabs,
  Tab,
  Stack,
  Divider,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Helmet } from 'react-helmet-async';

import { syllabusData } from '../../data/syllabus';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';

export const AcademicsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'All' | 'First Year' | 'Second Year' | 'Third Year' | 'Final Year'>('All');

  const filteredSyllabus = selectedYear === 'All'
    ? syllabusData
    : syllabusData.filter((item) => item.yearLevel === selectedYear || item.yearLevel === 'All Years');

  return (
    <>
      <Helmet>
        <title>Academics & Autonomous Curriculum | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Explore the B.Tech Computer Science & Engineering autonomous curriculum, Choice Based Credit System (CBCS), syllabus archives, and examination patterns at DYPCET Kolhapur."
        />
      </Helmet>

      <PageHeader
        title="Academics & Curriculum"
        subtitle="Empowering engineering graduates through an industry-benchmark Choice Based Credit System (CBCS) autonomous curriculum."
        badge="Autonomous Scheme"
      />

      {/* Program Details Card */}
      <SectionContainer>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800 }}>
              Undergraduate Degree Program
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
              B.Tech in Computer Science & Engineering
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
              The 4-year, 8-semester undergraduate B.Tech program in Computer Science & Engineering at DYPCET is crafted to bridge the gap between academic theory and high-growth industry demands. Operating under autonomous regulations of Shivaji University, the department emphasizes project-based learning, open-source programming, and modern software engineering paradigms.
            </Typography>

            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
              <Chip label="Duration: 4 Years (8 Semesters)" color="primary" sx={{ fontWeight: 600 }} />
              <Chip label="Sanctioned Intake: 360 Students" color="secondary" sx={{ fontWeight: 600 }} />
              <Chip label="Choice Based Credit System (CBCS)" variant="outlined" sx={{ fontWeight: 600 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'action.hover', p: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolOutlinedIcon sx={{ color: 'primary.main' }} />
                Specialization & Honors Tracks
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.65 }}>
                Under the autonomous curriculum, eligible students can opt for in-depth Honors degree tracks or Interdisciplinary Minor certifications:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  { name: 'Honors in Artificial Intelligence & Machine Learning', credits: '18-20 Credits' },
                  { name: 'Honors in Data Science & Big Data Engineering', credits: '18-20 Credits' },
                  { name: 'Honors in Cyber Security & Cryptography', credits: '18-20 Credits' },
                  { name: 'Minor in Full Stack Web & Cloud Computing', credits: '18-20 Credits' },
                ].map((track, i) => (
                  <Box
                    key={i}
                    sx={{
                      p: 1.5,
                      bgcolor: 'background.paper',
                      borderRadius: 1.5,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {track.name}
                    </Typography>
                    <Chip label={track.credits} size="small" sx={{ bgcolor: 'warning.light', fontWeight: 700 }} />
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Curriculum & Syllabus Table */}
      <SectionContainer
        id="syllabus"
        title="Curriculum & Syllabus Archive"
        subtitle="Download official autonomous syllabus structures by academic year and semester"
        overline="Course Documents"
        bgAlt
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Tabs
            value={selectedYear}
            onChange={(_e, val) => setSelectedYear(val)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="All Years" value="All" />
            <Tab label="First Year" value="First Year" />
            <Tab label="Second Year" value="Second Year" />
            <Tab label="Third Year" value="Third Year" />
            <Tab label="Final Year" value="Final Year" />
          </Tabs>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table aria-label="Syllabus archive table">
            <TableHead sx={{ bgcolor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Course / Structure Title</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Program</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Year Level</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Academic Scheme</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">PDF Download</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSyllabus.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell sx={{ fontWeight: 600 }}>{item.title}</TableCell>
                  <TableCell>{item.program}</TableCell>
                  <TableCell>
                    <Chip label={item.yearLevel} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell>{item.scheme}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<DownloadIcon />}
                      component="a"
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: 'secondary.dark' } }}
                    >
                      Download PDF
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionContainer>

      {/* Examination & Evaluation Pattern */}
      <SectionContainer
        id="regulations"
        title="Examination & Evaluation Pattern"
        subtitle="Continuous Internal Evaluation (CIE) and End Semester Examination (ESE) credit breakdown"
        overline="Assessment Framework"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                <FactCheckOutlinedIcon />
                Continuous Internal Evaluation (CIE)
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.65 }}>
                CIE constitutes 40% of the total weightage for theory courses and 50% for laboratory courses to ensure uniform learning engagement throughout the semester:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Mid-Semester Tests (CIE-I & CIE-II): 20 Marks
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Written tests evaluating analytical and design capability for syllabus units.
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Assignments, Quizzes & Case Studies: 10 Marks
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Formative assessments and coding challenges hosted on departmental platforms.
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Course Projects / Micro-Projects: 10 Marks
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Practical group application development applying real-world engineering problem statements.
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'secondary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
                <MenuBookIcon />
                End Semester Examination (ESE)
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.65 }}>
                End Semester Examinations are conducted by the Autonomous Examination Cell under Shivaji University norms:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Theory ESE (60% Weightage): 60 Marks
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Comprehensive 2.5 to 3 hour examination covering all 6 units with Bloom's Taxonomy-mapped questions.
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Practical / Oral External Examination (50% Weightage)
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Evaluated jointly by an internal and external university examiner with hands-on coding and viva-voce.
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Final Year Capstone Project Defense
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Year-long industry sponsored or research project presented before an expert committee.
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
};
