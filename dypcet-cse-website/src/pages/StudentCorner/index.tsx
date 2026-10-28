import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Tabs,
  Tab,
  Avatar,
  Stack,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
import { Helmet } from 'react-helmet-async';

import { studentClubsData } from '../../data/clubs';
import { departmentalActivitiesData } from '../../data/activities';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';

export const StudentCornerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Helmet>
        <title>Student Corner & Technical Clubs | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Student clubs, technical chapters (CSI, ACM, GDSC), national hackathons, and student achievements at DYPCET CSE."
        />
      </Helmet>

      <PageHeader
        title="Student Corner & Technical Chapters"
        subtitle="Vibrant student-led developer communities, competitive coding hackathons, and national project competitions."
        badge="Co-Curricular Life"
      />

      {/* Student Clubs & Chapters */}
      <SectionContainer
        title="Active Student Technical Chapters"
        subtitle="National and international professional society chapters operated by CSE students"
        overline="Student Communities"
      >
        <Grid container spacing={3}>
          {studentClubsData.map((club) => (
            <Grid item xs={12} sm={6} md={6} key={club.id}>
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main', fontWeight: 800 }}>
                    {club.acronym}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                      {club.name}
                    </Typography>
                    <Chip label={club.acronym} size="small" sx={{ mt: 0.5, bgcolor: 'warning.light', fontWeight: 700 }} />
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flexGrow: 1, lineHeight: 1.65 }}>
                  {club.description}
                </Typography>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1.5 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                    Faculty Mentor: <strong>{club.facultyCoordinator}</strong>
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.3 }}>
                    Student Lead: <strong>{club.studentLead}</strong>
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Department Activities & Hackathons */}
      <SectionContainer
        title="Workshops, Hackathons & Tech Fests"
        subtitle="Year-round technical enrichment events organized for student skill development"
        overline="Technical Events"
        bgAlt
      >
        <Grid container spacing={3}>
          {departmentalActivitiesData.map((act) => (
            <Grid item xs={12} sm={6} md={6} key={act.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                {act.imageUrl && (
                  <CardMedia
                    component="img"
                    image={act.imageUrl}
                    alt={act.title}
                    sx={{ width: { xs: '100%', sm: 180 }, height: { xs: 160, sm: 'auto' }, objectFit: 'cover' }}
                  />
                )}
                <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Chip label={act.category} size="small" sx={{ bgcolor: 'secondary.main', color: '#ffffff', fontWeight: 600 }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {act.date}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {act.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                    {act.description}
                  </Typography>
                  {act.speakerOrExpert && (
                    <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      Expert: {act.speakerOrExpert}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Student Achievements & Magazine Download */}
      <SectionContainer
        title="Student Achievements & Technical Magazine"
        overline="Excellence in Action"
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <EmojiEventsIcon sx={{ color: '#d4af37', fontSize: 32 }} />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Recent Competition Accolades
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Smart India Hackathon (SIH) 2024 Winners
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Team 'BinaryBeasts' won top cash prize in the regional round for developing an AI-driven agricultural distress monitoring platform.
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'action.hover', borderRadius: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    NPTEL National Top 1% & Gold Certifications
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    12 students secured top percentiles in advanced algorithms and deep learning courses offered by IIT Madras & IIT Kharagpur.
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ p: 3, bgcolor: 'primary.main', color: '#ffffff', borderRadius: 3 }}>
              <Typography variant="h6" sx={{ color: '#d4af37', fontWeight: 700, mb: 1.5 }}>
                Department Annual Magazine
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 3, lineHeight: 1.7 }}>
                Download 'TECH-PULSE', the annual student magazine featuring technical whitepapers, alumni interviews, student artwork, and coding challenge solutions.
              </Typography>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                component="a"
                href="https://pub-c398185b3af042318383473fdcadf890.r2.dev/Departments/CSE/Brochure/CSE_Department_Brochure_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: 'warning.main',
                  color: '#1a1a1a',
                  fontWeight: 800,
                  '&:hover': { bgcolor: 'warning.light' },
                }}
              >
                Download Magazine PDF
              </Button>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
};
