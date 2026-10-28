import React from 'react';
import { Box, Chip, Stack } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export const AccreditationBadge: React.FC = () => {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ alignItems: 'center' }}>
      <Chip
        icon={<WorkspacePremiumIcon sx={{ fontSize: '16px !important', color: '#ffffff !important' }} />}
        label="NBA Accredited (Tier-II)"
        size="small"
        sx={{
          backgroundColor: '#1b5e20',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.02em',
        }}
      />
      <Chip
        icon={<VerifiedIcon sx={{ fontSize: '16px !important', color: '#ffffff !important' }} />}
        label="NAAC 'A' Grade"
        size="small"
        sx={{
          backgroundColor: '#0b2850',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.75rem',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      />
      <Chip
        icon={<SchoolIcon sx={{ fontSize: '16px !important', color: '#1a1a1a !important' }} />}
        label="UGC Autonomous"
        size="small"
        sx={{
          backgroundColor: '#d4af37',
          color: '#1a1a1a',
          fontWeight: 700,
          fontSize: '0.75rem',
        }}
      />
    </Stack>
  );
};
