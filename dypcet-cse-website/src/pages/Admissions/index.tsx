import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Helmet } from 'react-helmet-async';

import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';

export const AdmissionsPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | false>('faq-1');

  const faqs = [
    {
      id: 'faq-1',
      q: 'What is the sanctioned intake for B.Tech in Computer Science & Engineering?',
      a: 'The sanctioned intake for the 4-year B.Tech in Computer Science & Engineering at DYPCET Kolhapur is 360 seats per academic year, approved by AICTE, New Delhi and DTE Maharashtra.',
    },
    {
      id: 'faq-2',
      q: 'What entrance exams are accepted for admission to DYPCET CSE?',
      a: 'Admissions for Maharashtra State candidates are primarily based on the MHT-CET (Engineering) score. All-India quota candidates can also apply based on their JEE (Main) Paper-I percentile through the Centralized Admission Process (CAP).',
    },
    {
      id: 'faq-3',
      q: 'What is the college DTE Code for filling the CAP option form?',
      a: 'The official Maharashtra DTE Institute Code for D. Y. Patil College of Engineering and Technology, Kolhapur is 6282. The course code for Computer Science & Engineering is 628224210.',
    },
    {
      id: 'faq-4',
      q: 'Are scholarship schemes available for eligible students?',
      a: 'Yes, all Government of Maharashtra scholarships (Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna - EBC, Dr. Panjabrao Deshmukh Hostel Maintenance Allowance, and SC/ST/VJNT/OBC category freeships via MahaDBT portal) are applicable as per government norms.',
    },
    {
      id: 'faq-5',
      q: 'Is DYPCET an autonomous college?',
      a: 'Yes, DYPCET is an Autonomous Institute affiliated to Shivaji University, Kolhapur. Autonomy allows us to design an updated, industry-aligned CBCS curriculum and conduct swift continuous examinations while the degree is conferred by Shivaji University.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admissions & Intake Capacity (360 Seats) | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Admissions guide for B.Tech Computer Science & Engineering at DYPCET Kolhapur. 360 intake, eligibility criteria, CAP rounds, DTE code 6282, and scholarship details."
        />
      </Helmet>

      <PageHeader
        title="Admissions & Eligibility"
        subtitle="Join the prestigious autonomous engineering institution in Kolhapur with 360 intake and high placement records."
        badge="DTE Code: 6282"
      />

      {/* Intake & Key Details */}
      <SectionContainer>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800 }}>
              Undergraduate Admissions
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              B.Tech in Computer Science & Engineering
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
              Admissions to the undergraduate B.Tech CSE program at DYPCET Kolhapur are governed by the State Common Entrance Test Cell, Government of Maharashtra through the Centralized Admission Process (CAP).
            </Typography>

            <Box sx={{ p: 2.5, bgcolor: 'action.hover', borderRadius: 2, mb: 3, borderLeft: '4px solid', borderColor: 'warning.main' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                Institute DTE Code: <strong>6282</strong> | Course Choice Code: <strong>628224210</strong>
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 0.5 }}>
                Use this choice code while submitting your option form on the official CET Cell CAP portal.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component="a"
                href="https://cetcell.mahacet.org"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon />}
                sx={{ bgcolor: 'primary.main' }}
              >
                Go to Maha CET Cell CAP Portal
              </Button>
              <Button
                variant="outlined"
                size="large"
                component="a"
                href="https://pub-c398185b3af042318383473fdcadf890.r2.dev/nba/Fra%20Bank%20Details_0001_0001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
              >
                FRA Approved Fee Structure
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ p: 3, bgcolor: 'primary.main', color: '#ffffff', borderRadius: 3 }}>
              <Typography variant="h5" sx={{ color: '#d4af37', fontWeight: 800, mb: 2 }}>
                Intake Capacity Summary
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 1.5 }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    First Year B.Tech CSE Approved Intake
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    360 Seats
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 1.5 }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Direct Second Year (DSE) Lateral Entry
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    10% Over & Above Intake
                  </Typography>
                </Box>
                <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 1.5 }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Tuition Fee Waiver Scheme (TFWS)
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    5% Supernumerary Seats via CAP
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Eligibility Criteria */}
      <SectionContainer
        title="Eligibility Criteria for B.Tech Admission"
        subtitle="Mandatory academic prerequisites established by the Government of Maharashtra and AICTE"
        overline="Entry Requirements"
        bgAlt
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                Maharashtra State Candidature (First Year)
              </Typography>
              <List dense>
                {[
                  'Candidate must be an Indian National.',
                  'Passed HSC (Std. XII) examination of Maharashtra State Board of Secondary and Higher Secondary Education or equivalent.',
                  'Studied Physics and Mathematics as compulsory subjects along with Chemistry/Biotechnology/Computer Science/IT/Technical Vocational subject.',
                  'Secured minimum 45% marks (40% for Backward Class, EWS, and PwD candidates belonging to Maharashtra State only) in the above subjects taken together.',
                  'Obtained a non-zero positive score in MHT-CET (PCM group) conducted by the State CET Cell.',
                ].map((crit, idx) => (
                  <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={crit} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.6 }} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'secondary.main' }}>
                All India / Direct Second Year (Lateral Entry)
              </Typography>
              <List dense>
                {[
                  'All India Candidates: Must obtain a non-zero positive score in JEE (Main) Paper-I or MHT-CET examination.',
                  'Direct Second Year (Diploma Holders): Passed minimum 3-year Diploma examination with at least 45% marks (40% for reserved categories) in appropriate branch of Engineering and Technology.',
                  'Direct Second Year (B.Sc. Degree): Passed B.Sc. degree from a recognized university with at least 45% marks and Mathematics as a subject in Std. XII.',
                  'Participate in the Centralized Admission Process (CAP) conducted by State CET Cell Maharashtra.',
                ].map((crit, idx) => (
                  <ListItem key={idx} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={crit} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.6 }} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Frequently Asked Questions */}
      <SectionContainer
        title="Frequently Asked Questions (Admissions FAQ)"
        subtitle="Common queries regarding CAP seat allotment, reservation benefits, and fee concessions"
        overline="Admissions FAQ"
      >
        <Box sx={{ maxWidth: 880, mx: 'auto' }}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expandedFaq === faq.id}
              onChange={(_e, isExp) => setExpandedFaq(isExp ? faq.id : false)}
              sx={{ mb: 1.5, borderRadius: '8px !important' }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <HelpOutlineIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {faq.q}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, pl: 4 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </SectionContainer>
    </>
  );
};
