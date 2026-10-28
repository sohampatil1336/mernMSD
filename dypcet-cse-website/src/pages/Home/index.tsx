import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  InputAdornment,
  Alert,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ComputerIcon from '@mui/icons-material/Computer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DownloadIcon from '@mui/icons-material/Download';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

import { useDepartment } from '../../hooks/useDepartment';
import { usePlacements } from '../../hooks/usePlacements';
import { useNewsAndEvents } from '../../hooks/useNews';
import { SectionContainer } from '../../components/common/SectionContainer';
import { StatCard } from '../../components/common/StatCard';
import { NewsCard } from '../../components/common/NewsCard';
import { EventCard } from '../../components/common/EventCard';
import { AccreditationBadge } from '../../components/common/AccreditationBadge';

export const HomePage: React.FC = () => {
  const dept = useDepartment();
  const { statistics, recruiters, reportPdf } = usePlacements();
  const { news, events } = useNewsAndEvents();

  const [activeNewsCategory, setActiveNewsCategory] = useState<string>('All');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Academic', 'Events', 'Achievements', 'Placements'];

  const filteredNews = activeNewsCategory === 'All'
    ? news
    : news.filter((n) => n.category === activeNewsCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribeEmail) {
      setSubscribed(true);
      setSubscribeEmail('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Department of Computer Science & Engineering | DYPCET Kolhapur</title>
        <meta
          name="description"
          content="Official portal of the Department of Computer Science & Engineering at D. Y. Patil College of Engineering and Technology (DYPCET), Kolhapur. Autonomous, NAAC 'A', NBA Accredited. 360 intake, 64 LPA highest package."
        />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #05162e 0%, #0b2850 60%, #153e77 100%)',
          color: '#ffffff',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
          borderBottom: '4px solid',
          borderColor: 'warning.main',
        }}
      >
        {/* Subtle background graphic overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ mb: 2 }}>
                  <AccreditationBadge />
                </Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
                    lineHeight: 1.18,
                    mb: 2,
                    fontFamily: "'Merriweather', Georgia, serif",
                  }}
                >
                  Department of <br />
                  <span style={{ color: '#d4af37' }}>Computer Science</span> & Engineering
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: { xs: '1.05rem', md: '1.2rem' },
                    maxWidth: 650,
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  Pioneering autonomous engineering education benchmarked with global standards.
                  Nurturing innovative technocrats with state-of-the-art computing labs, stellar 64 LPA placements, and NBA accreditation.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    to="/admissions"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: 'warning.main',
                      color: '#1a1a1a',
                      fontWeight: 700,
                      py: 1.4,
                      px: 3.5,
                      '&:hover': { backgroundColor: 'warning.light' },
                    }}
                  >
                    Explore Admissions (Intake 360)
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={RouterLink}
                    to="/academics"
                    sx={{
                      borderColor: 'rgba(255,255,255,0.4)',
                      color: '#ffffff',
                      fontWeight: 600,
                      py: 1.4,
                      px: 3,
                      '&:hover': {
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      },
                    }}
                  >
                    View CBCS Curriculum
                  </Button>
                </Stack>
              </motion.div>
            </Grid>

            {/* Hero Quick Spotlight Card */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  sx={{
                    background: 'rgba(15, 27, 48, 0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: '#ffffff',
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <WorkspacePremiumIcon sx={{ color: '#d4af37', fontSize: 26 }} />
                    <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700 }}>
                      Placement Milestone
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.25)',
                      mb: 2.5,
                    }}
                  >
                    <Typography variant="h3" sx={{ color: '#d4af37', fontWeight: 800 }}>
                      ₹ 64.0 LPA
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600 }}>
                      Highest Salary Package (Adobe)
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Secured by Ms. Anamika Dakare, B.Tech CSE (Batch 2024-25)
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2.5 }}>
                    Autonomous curriculum designed in consultation with industry leaders, supported by 12 computing labs and top MNC recruitments.
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    component={RouterLink}
                    to="/placements"
                    sx={{
                      backgroundColor: 'primary.light',
                      color: '#ffffff',
                      fontWeight: 600,
                    }}
                  >
                    View Full Placement Report & Recruiter List
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick Stats Strip */}
      <Container maxWidth="xl" sx={{ mt: -4, position: 'relative', zIndex: 10, mb: 4 }}>
        <Grid container spacing={2}>
          {dept.quickStats.map((stat, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <StatCard
                label={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                description={stat.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* HOD Welcome Desk */}
      <SectionContainer
        title="Message from the Head of Department"
        overline="Leadership & Academic Vision"
        bgAlt
      >
        <Card sx={{ p: { xs: 2.5, md: 4 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={4} md={3} sx={{ textAlign: 'center' }}>
              <Avatar
                src={dept.hod.photoUrl}
                alt={dept.hod.name}
                sx={{
                  width: { xs: 130, md: 160 },
                  height: { xs: 130, md: 160 },
                  mx: 'auto',
                  mb: 2,
                  border: '4px solid',
                  borderColor: 'secondary.main',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                {dept.hod.name}
              </Typography>
              <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, display: 'block' }}>
                {dept.hod.designation}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                {dept.hod.qualification}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={8} md={9}>
              <Box sx={{ borderLeft: '3px solid', borderColor: 'primary.main', pl: 2.5, py: 1 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontStyle: 'italic' }}>
                  "{dept.hod.message.slice(0, 480)}..."
                </Typography>
                <Button
                  component={RouterLink}
                  to="/people#hod"
                  variant="text"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ color: 'primary.main', fontWeight: 700, p: 0 }}
                >
                  Read Full Welcome Address & Profile
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </SectionContainer>

      {/* Why CSE @ DYPCET */}
      <SectionContainer
        title="Why Choose Computer Science & Engineering @ DYPCET"
        subtitle="Key academic and infrastructural pillars empowering our students to excel globally"
        overline="Institutional Strengths"
      >
        <Grid container spacing={3}>
          {[
            {
              icon: <VerifiedIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
              title: 'Autonomous Academic Flexibility',
              description: 'Industry-aligned Choice Based Credit System (CBCS) curriculum, updated dynamically in consultation with Board of Studies experts.',
            },
            {
              icon: <ComputerIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
              title: '12 Advanced Computing Labs',
              description: 'State-of-the-art facilities with high-performance workstations, cloud simulation testbeds, and dedicated AI/ML computing platforms.',
            },
            {
              icon: <TrendingUpIcon sx={{ fontSize: 36, color: 'success.main' }} />,
              title: 'Proven Placement Pedigree',
              description: 'Highest package of 64 LPA (Adobe), average 6.3 LPA for top 10%, and recruitment drives by 100+ premier technology MNCs.',
            },
            {
              icon: <AutoStoriesIcon sx={{ fontSize: 36, color: 'warning.main' }} />,
              title: 'Outcome-Based Education (OBE)',
              description: 'NBA Tier-II accredited department adhering to rigorous graduate attributes and continuous internal evaluation methodologies.',
            },
            {
              icon: <HandshakeIcon sx={{ fontSize: 36, color: 'primary.main' }} />,
              title: 'Active Industry MoUs & Chapters',
              description: 'Recognized student chapters for CSI, ACM, GDSC, and collaborations providing live projects, internships, and sponsorships.',
            },
            {
              icon: <WorkspacePremiumIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
              title: 'Research & Innovation Focus',
              description: 'AICTE-funded RPS projects, national hackathon wins, and peer-reviewed faculty publications in IEEE, Springer, and Elsevier.',
            },
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ height: '100%', p: 2 }}>
                <CardContent>
                  <Box sx={{ mb: 1.5 }}>{item.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Latest News & Upcoming Events */}
      <SectionContainer
        title="Department Notices & Announcements"
        subtitle="Stay updated with academic notices, placements, competitions, and technical events"
        overline="Notice Board & Feed"
        bgAlt
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap', gap: 1 }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              clickable
              onClick={() => setActiveNewsCategory(cat)}
              color={activeNewsCategory === cat ? 'primary' : 'default'}
              variant={activeNewsCategory === cat ? 'filled' : 'outlined'}
              sx={{ fontWeight: 600, px: 1 }}
            />
          ))}
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {filteredNews.slice(0, 3).map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <NewsCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
          Upcoming Department Events
        </Typography>
        <Grid container spacing={3}>
          {events.map((ev) => (
            <Grid item xs={12} md={4} key={ev.id}>
              <EventCard event={ev} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Recruiter Wall & Placement Snapshot */}
      <SectionContainer
        title="Our Premier Campus Recruiters"
        subtitle="Top technology conglomerates and product firms recruiting engineering talent from DYPCET CSE"
        overline="Industry Partnerships"
      >
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {recruiters.map((rec, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Card
                sx={{
                  p: 2,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: (theme) => theme.palette.mode === 'light' ? '#ffffff' : 'rgba(255,255,255,0.03)',
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  {rec.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/placements"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, py: 1.2 }}
          >
            Explore Detailed Placement Reports & Year-Wise CTC Data
          </Button>
        </Box>
      </SectionContainer>

      {/* Newsletter Subscription Bar */}
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light' ? '#0b2850' : '#08101e',
          color: '#ffffff',
          py: 5,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#ffffff' }}>
              Subscribe to Department Announcements
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              Receive official notices, academic calendars, workshop invites, and placement updates directly.
            </Typography>
          </Box>

          {subscribed ? (
            <Alert severity="success" sx={{ maxWidth: 500, mx: 'auto' }}>
              Thank you for subscribing! Department newsletters and alerts will be sent to your email.
            </Alert>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1.5,
                maxWidth: 540,
                mx: 'auto',
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your institutional or personal email"
                type="email"
                required
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': { color: '#1a1a1a' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MarkEmailReadIcon sx={{ color: '#0b2850', fontSize: 20 }} />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: 'warning.main',
                  color: '#1a1a1a',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  px: 3,
                  '&:hover': { backgroundColor: 'warning.light' },
                }}
              >
                Subscribe
              </Button>
            </Box>
          )}
        </Container>
      </Box>

      {/* Bottom Institutional CTA Bar */}
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'light' ? '#f1f5f9' : '#0f172a',
          py: 4,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={7}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                Ready to Join DYPCET Computer Science & Engineering?
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Admissions open for B.Tech CSE (Autonomous) through Maharashtra State Common Entrance Test (MHT-CET) & JEE Main.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="flex-end">
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/admissions"
                  sx={{ backgroundColor: 'primary.main' }}
                >
                  Admissions Guide
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href={reportPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<DownloadIcon />}
                >
                  Placement Report
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
