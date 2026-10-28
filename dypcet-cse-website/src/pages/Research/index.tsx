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
  Chip,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import ArticleIcon from '@mui/icons-material/Article';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LaunchIcon from '@mui/icons-material/Launch';
import { Helmet } from 'react-helmet-async';

import { researchFocusAreas, researchPublicationsData, researchProjectsData } from '../../data/research';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';

export const ResearchPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');

  const filteredPublications = selectedType === 'All'
    ? researchPublicationsData
    : researchPublicationsData.filter((p) => p.type === selectedType);

  return (
    <>
      <Helmet>
        <title>Research, Innovation & Publications | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Explore peer-reviewed publications, AICTE sponsored research grants, patents, and industry MoUs in the CSE Department at DYPCET Kolhapur."
        />
      </Helmet>

      <PageHeader
        title="Research & Innovation"
        subtitle="Advancing frontiers in Artificial Intelligence, Cloud Infrastructure, Cybersecurity, and Applied Data Engineering."
        badge="Academic Research"
      />

      {/* Focus Research Groups */}
      <SectionContainer
        title="Department Research Focus Groups"
        subtitle="Thrust areas where our faculty and student researchers actively investigate and publish"
        overline="Research Themes"
      >
        <Grid container spacing={2}>
          {researchFocusAreas.map((area, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ p: 2, height: '100%', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <ScienceIcon sx={{ color: 'primary.main', fontSize: 28 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {area}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Sponsored Research Projects & Grants */}
      <SectionContainer
        title="Sponsored Research & Grants"
        subtitle="Funded R&D projects by AICTE Research Promotion Scheme (RPS) and university research bodies"
        overline="Funded Projects"
        bgAlt
      >
        <Grid container spacing={3}>
          {researchProjectsData.map((proj) => (
            <Grid item xs={12} md={4} key={proj.id}>
              <Card sx={{ height: '100%', p: 3, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={proj.status}
                    size="small"
                    color={proj.status === 'Ongoing' ? 'success' : 'default'}
                    sx={{ fontWeight: 700 }}
                  />
                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    {proj.year}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1.5 }}>
                  {proj.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  <strong>PI:</strong> {proj.principalInvestigator}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  <strong>Funding Agency:</strong> {proj.fundingAgency}
                </Typography>
                <Box sx={{ mt: 'auto', pt: 1.5, borderTop: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MonetizationOnOutlinedIcon sx={{ color: 'warning.main', fontSize: 20 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                    Grant: {proj.amountGrant}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Faculty Publications Table */}
      <SectionContainer
        title="Recent Faculty Publications"
        subtitle="Peer-reviewed scholarly articles in IEEE, Springer, Elsevier, and international conference proceedings"
        overline="Scholarly Publications"
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <TextField
            select
            size="small"
            label="Filter by Publication Type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            sx={{ minWidth: 240 }}
          >
            <MenuItem value="All">All Publications</MenuItem>
            <MenuItem value="Journal">Journals</MenuItem>
            <MenuItem value="Conference">Conference Proceedings</MenuItem>
            <MenuItem value="Book Chapter">Book Chapters</MenuItem>
          </TextField>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table aria-label="Publications table">
            <TableHead sx={{ bgcolor: 'primary.main' }}>
              <TableRow>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Title of Paper</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Author(s)</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Journal / Conference Venue</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }}>Type</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">Year</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 700 }} align="center">DOI Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPublications.map((pub) => (
                <TableRow key={pub.id} hover>
                  <TableCell sx={{ fontWeight: 600, maxWidth: 300 }}>{pub.title}</TableCell>
                  <TableCell>{pub.authors}</TableCell>
                  <TableCell sx={{ fontStyle: 'italic' }}>{pub.venue}</TableCell>
                  <TableCell>
                    <Chip label={pub.type} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell align="center">{pub.year}</TableCell>
                  <TableCell align="center">
                    {pub.doiOrLink ? (
                      <Button
                        size="small"
                        component="a"
                        href={pub.doiOrLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                      >
                        View
                      </Button>
                    ) : (
                      '—'
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </SectionContainer>

      {/* Industry MoUs & Collaborations */}
      <SectionContainer
        title="Industry MoUs & Technology Collaborations"
        subtitle="Formal partnerships providing student internships, industrial visits, and expert guest sessions"
        overline="Industry Ecosystem"
        bgAlt
      >
        <Grid container spacing={3}>
          {[
            { partner: 'Persistent Systems Ltd.', scope: 'Curriculum advisory, faculty enablement, and campus hackathon sponsorships', since: '2021' },
            { partner: 'Red Hat Academy', scope: 'Enterprise Linux training, cloud certifications, and open source curriculum integration', since: '2022' },
            { partner: 'AWS Academy', scope: 'Cloud computing modules, student certification badges, and cloud credits for projects', since: '2023' },
            { partner: 'Cisco Networking Academy', scope: 'CCNA curriculum integration, network routing labs, and cybersecurity training', since: '2020' },
          ].map((mou, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ p: 2.5, height: '100%' }}>
                <HandshakeIcon sx={{ color: 'secondary.main', fontSize: 32, mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {mou.partner}
                </Typography>
                <Chip label={`Active Since ${mou.since}`} size="small" sx={{ mb: 1.5, bgcolor: 'action.hover' }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {mou.scope}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
};
