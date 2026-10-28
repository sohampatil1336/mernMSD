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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DownloadIcon from '@mui/icons-material/Download';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupIcon from '@mui/icons-material/Group';
import { Helmet } from 'react-helmet-async';

import { useDepartment } from '../../hooks/useDepartment';
import { boardOfStudiesData } from '../../data/bos';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';
import { AccreditationBadge } from '../../components/common/AccreditationBadge';
import { PlaceholderNotice } from '../../components/layout/PlaceholderNotice';

export const AboutPage: React.FC = () => {
  const dept = useDepartment();
  const [expandedPO, setExpandedPO] = useState<string | false>('PO1');

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPO(isExpanded ? panel : false);
  };

  return (
    <>
      <Helmet>
        <title>About the Department | Computer Science & Engineering | DYPCET</title>
        <meta
          name="description"
          content="Learn about the history, vision, mission, PEOs, POs, PSOs, and NBA accreditation of the Department of Computer Science & Engineering, DYPCET Kolhapur."
        />
      </Helmet>

      <PageHeader
        title="About the Department"
        subtitle="Established in 1984, our department is dedicated to engineering excellence, cutting-edge research, and outcome-based autonomous education."
        badge="Institutional Overview"
      />

      {/* Overview & History */}
      <SectionContainer
        title="Department Overview & History"
        overline="Four Decades of Excellence"
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.primary' }}>
              The Department of Computer Science and Engineering was established in the year <strong>1984</strong> with an initial intake to cater to the burgeoning needs of the IT industry. Over four decades, the department has grown exponentially and currently boasts an approved intake of <strong>360 students</strong> in its undergraduate B.Tech program.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: 'text.secondary' }}>
              As an autonomous institution affiliated to Shivaji University, Kolhapur, our curriculum integrates emerging technological paradigms—Artificial Intelligence, Machine Learning, Cloud Architecture, and Data Science. The department holds <strong>NBA Tier-II Accreditation</strong> (valid up to 30-06-2026) and the college is accredited with an <strong>'A' Grade by NAAC</strong>.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <AccreditationBadge />
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ bgcolor: 'primary.main', color: '#ffffff', p: 3, borderRadius: 3 }}>
              <Typography variant="h6" sx={{ color: '#d4af37', fontWeight: 700, mb: 2 }}>
                Key Accreditation Facts
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                    NBA Accreditation Status
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {dept.accreditations.nba.validity}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                    Institutional NAAC Grade
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {dept.accreditations.naac.cycle}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                    Institutional Autonomy
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {dept.accreditations.autonomy.status}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Vision & Mission as distinctive callouts */}
      <SectionContainer bgAlt>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                height: '100%',
                p: 3,
                borderLeft: '6px solid',
                borderLeftColor: 'primary.main',
                bgcolor: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#111e38'),
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: '0.1em' }}>
                  Our Vision
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, my: 1.5, color: 'text.primary' }}>
                  Department Vision
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary', fontStyle: 'italic' }}>
                  "{dept.vision}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Card
              sx={{
                height: '100%',
                p: 3,
                borderLeft: '6px solid',
                borderLeftColor: 'secondary.main',
                bgcolor: (theme) => (theme.palette.mode === 'light' ? '#ffffff' : '#111e38'),
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: '0.1em' }}>
                  Our Purpose
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, my: 1.5, color: 'text.primary' }}>
                  Department Mission Statements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {dept.mission.map((m, idx) => (
                    <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Chip
                        label={`M${idx + 1}`}
                        size="small"
                        sx={{ bgcolor: 'secondary.main', color: '#ffffff', fontWeight: 700, minWidth: 36 }}
                      />
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {m}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* PEOs — Program Educational Objectives */}
      <SectionContainer
        title="Program Educational Objectives (PEOs)"
        subtitle="Broad career and professional accomplishments our graduates are expected to achieve within 3 to 5 years of graduation"
        overline="Educational Objectives"
      >
        <Grid container spacing={3}>
          {dept.peos.map((peo, i) => (
            <Grid item xs={12} sm={6} key={peo.id || i}>
              <Card sx={{ height: '100%', p: 2.5 }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Chip
                      label={`PEO ${i + 1}`}
                      sx={{ bgcolor: 'primary.main', color: '#ffffff', fontWeight: 700 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Objective {i + 1}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {peo.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Program Outcomes (POs) & PSOs */}
      <SectionContainer
        title="Program Outcomes (POs) & PSOs"
        subtitle="The 12 NBA Graduate Attributes and Program Specific Outcomes attained by students upon completion of B.Tech CSE"
        overline="Outcome Based Education"
        bgAlt
      >
        <Box sx={{ maxWidth: 900, mx: 'auto', mb: 4 }}>
          {dept.pos.map((po) => (
            <Accordion
              key={po.id}
              expanded={expandedPO === po.id}
              onChange={handleAccordionChange(po.id)}
              sx={{ mb: 1, borderRadius: '8px !important' }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Chip
                    label={po.id}
                    size="small"
                    sx={{ bgcolor: 'primary.light', color: '#ffffff', fontWeight: 700 }}
                  />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {po.title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {po.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {dept.psos.length > 0 && (
          <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Program Specific Outcomes (PSOs)
            </Typography>
            <Grid container spacing={2}>
              {dept.psos.map((pso, idx) => (
                <Grid item xs={12} key={pso.id || idx}>
                  <Card sx={{ p: 2, borderLeft: '4px solid', borderColor: 'warning.main' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: 'primary.main' }}>
                      {pso.title || `PSO ${idx + 1}`}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {pso.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </SectionContainer>

      {/* Board of Studies (BoS) Members */}
      <SectionContainer
        id="bos"
        title="Department Board of Studies (BoS)"
        subtitle="Governing academic body responsible for curriculum structuring, elective design, and industry alignment"
        overline="Academic Governance"
      >
        <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table aria-label="Board of Studies table">
            <TableHead sx={{ bgcolor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Role in BoS</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Designation</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Organization</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boardOfStudiesData.map((member) => (
                <TableRow key={member.id} hover>
                  <TableCell sx={{ fontWeight: 600 }}>{member.name}</TableCell>
                  <TableCell>
                    <Chip
                      label={member.role}
                      size="small"
                      sx={{
                        bgcolor: member.role === 'Chairman' ? 'secondary.main' : 'primary.light',
                        color: '#ffffff',
                        fontWeight: 600,
                      }}
                    />
                  </TableCell>
                  <TableCell>{member.designation}</TableCell>
                  <TableCell>{member.organization}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {boardOfStudiesData.some((m) => !m.verified) && (
          <PlaceholderNotice
            title="External Expert Representation Pending Official Gazette Upload"
            message="External university nominee and corporate advisory board member names are pending final gazette notification from Shivaji University."
            compact
          />
        )}
      </SectionContainer>

      {/* Organizational Chart & IQAC */}
      <SectionContainer
        title="Organizational Governance Structure"
        subtitle="Administrative and committee hierarchy ensuring rigorous quality assurance and student welfare"
        overline="Institutional Hierarchy"
        bgAlt
      >
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Card sx={{ p: 3, mb: 3 }}>
            <Box sx={{ p: 2, bgcolor: 'primary.main', color: '#ffffff', borderRadius: 2, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                Head of Department (Dr. Radhika J. Dhanal)
              </Typography>
              <Typography variant="caption">Academic & Administrative Executive</Typography>
            </Box>

            <Box sx={{ width: 2, height: 24, bgcolor: 'divider', mx: 'auto', mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ p: 1.5, bgcolor: 'action.hover' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Academic & BoS Committee
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Curriculum & Examinations
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ p: 1.5, bgcolor: 'action.hover' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    NBA / NAAC & IQAC Cell
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Continuous Quality Assurance
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ p: 1.5, bgcolor: 'action.hover' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Training & Placement Cell
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Corporate Drives & Internships
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            <Box sx={{ width: 2, height: 24, bgcolor: 'divider', mx: 'auto', my: 2 }} />

            <Box sx={{ p: 2, bgcolor: 'secondary.main', color: '#ffffff', borderRadius: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff' }}>
                Department Faculty (28 Members) & Technical Support Staff
              </Typography>
            </Box>
          </Card>
        </Box>
      </SectionContainer>
    </>
  );
};
