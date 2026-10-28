import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Helmet } from 'react-helmet-async';

import { useLabs } from '../../hooks/useLabs';
import { PageHeader } from '../../components/layout/PageHeader';
import { SectionContainer } from '../../components/common/SectionContainer';
import { LabCard } from '../../components/common/LabCard';

export const FacilitiesPage: React.FC = () => {
  const labs = useLabs();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Helmet>
        <title>Laboratories & Facilities | CSE Department | DYPCET</title>
        <meta
          name="description"
          content="Explore the 12 specialized computing laboratories, Central Computing Facility (CCF), digital library, and smart classrooms at DYPCET CSE."
        />
      </Helmet>

      <PageHeader
        title="Facilities & Infrastructure"
        subtitle="12 air-conditioned computing laboratories equipped with state-of-the-art workstations, high-speed gigabit LAN, and industry-grade development software."
        badge="Computing Infrastructure"
      />

      {/* 12 Computing Laboratories Grid */}
      <SectionContainer
        title="12 Departmental Computing Laboratories"
        subtitle="Air-conditioned labs dedicated to programming, system architecture, cloud platforms, and data engineering"
        overline="Practical Infrastructure"
      >
        <Grid container spacing={3}>
          {labs.map((lab) => (
            <Grid item xs={12} sm={6} md={4} key={lab.id}>
              <LabCard lab={lab} />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* Central Computing Facility (CCF) (#ccf) */}
      <SectionContainer
        id="ccf"
        title="Central Computing Facility (CCF)"
        subtitle="High-performance centralized computing center with uninterrupted power and dedicated high-speed leased line"
        overline="Core Server & Network Infrastructure"
        bgAlt
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="320"
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
              alt="Central Computing Facility Server Room"
              sx={{ borderRadius: 2, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}>
              <StorageIcon />
              High-Throughput Server & Cloud Backbone
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
              The Central Computing Facility serves as the digital backbone for the CSE department and DYPCET campus. Housing centralized Dell PowerEdge rack servers, enterprise-grade Cisco managed switches, and a 1 Gbps dedicated high-speed internet leased line with campus-wide Wi-Fi connectivity.
            </Typography>

            <Grid container spacing={2}>
              {[
                { title: '1 Gbps Dedicated Leased Line', desc: 'Symmetrical internet bandwidth with 24/7 gateway firewall' },
                { title: '100% UPS & Diesel Generator Backup', desc: 'Uninterrupted power support for server racks and lab nodes' },
                { title: 'Campus Licensed Software', desc: 'Oracle, MATLAB, Microsoft Visual Studio, Ubuntu Server, RedHat' },
                { title: 'Hardware Cloud Testbed', desc: 'Virtualization servers hosting student lab assignments and portals' },
              ].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box sx={{ p: 1.5, bgcolor: 'background.paper', borderRadius: 1.5, border: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Library & Digital Learning Resources (#library) */}
      <SectionContainer
        id="library"
        title="Digital Library & Academic Learning Resources"
        subtitle="Direct access to IEEE Xplore, ACM Digital Library, Springer, and National Digital Library of India (NDLI)"
        overline="Knowledge Repositories"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', p: 3 }}>
              <MenuBookIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Department Library Corner
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                In addition to the Central Library, the department maintains a curated reference collection of 850+ titles, undergraduate project synopses, and seminar reports.
              </Typography>
              <Chip label="850+ Specialized CSE Books" size="small" sx={{ bgcolor: 'primary.light', color: '#ffffff', fontWeight: 600 }} />
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', p: 3 }}>
              <DevicesIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                IEEE & ACM Digital Subscriptions
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                Full-text IP-authenticated institutional access to IEEE Xplore digital library, Elsevier ScienceDirect, and DELNET resources for faculty and student research.
              </Typography>
              <Chip label="11,000+ E-Journals Accessible" size="small" sx={{ bgcolor: 'secondary.main', color: '#ffffff', fontWeight: 600 }} />
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', p: 3 }}>
              <SchoolIcon sx={{ fontSize: 40, color: 'warning.main', mb: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                NPTEL & MOOC Local Chapter
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                SWAYAM NPTEL local chapter encouraging online credit transfer. 80+ students achieve elite and silver certifications every semester.
              </Typography>
              <Chip label="Recognized NPTEL Chapter" size="small" sx={{ bgcolor: 'warning.main', color: '#1a1a1a', fontWeight: 700 }} />
            </Card>
          </Grid>
        </Grid>
      </SectionContainer>

      {/* Classrooms, Seminar Halls & Safety */}
      <SectionContainer
        title="Classrooms & Student Safety Support"
        overline="Campus Amenities"
        bgAlt
      >
        <Grid container spacing={3}>
          {[
            {
              icon: <MeetingRoomIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
              title: 'Smart ICT Classrooms',
              desc: 'Equipped with interactive LCD projectors, high-resolution document cameras, and lecture capture systems.',
            },
            {
              icon: <MeetingRoomIcon sx={{ fontSize: 32, color: 'secondary.main' }} />,
              title: 'Air-Conditioned Seminar Hall',
              desc: 'Dedicated 200-capacity hall with surround acoustics for technical symposiums, webinars, and guest lectures.',
            },
            {
              icon: <SecurityIcon sx={{ fontSize: 32, color: 'success.main' }} />,
              title: 'CCTV & Campus Fire Safety',
              desc: '24/7 IP surveillance covering all corridors and computing labs; automated fire alarm and extinguisher systems.',
            },
          ].map((c, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ height: '100%', p: 2.5 }}>
                <Box sx={{ mb: 1.5 }}>{c.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {c.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  {c.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </>
  );
};
