import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

interface PlaceholderNoticeProps {
  title?: string;
  message?: string;
  sourceTarget?: string;
  compact?: boolean;
}

export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  title = 'Content Pending Verification',
  message = 'Content pending — replace with verified department data as per official NBA/NAAC audit guidelines.',
  sourceTarget,
  compact = false,
}) => {
  return (
    <Box
      sx={{
        p: compact ? 1.5 : 2.5,
        my: 2,
        borderRadius: 2,
        border: '1.5px dashed',
        borderColor: (theme) => (theme.palette.mode === 'light' ? '#d4af37' : '#997d1e'),
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? 'rgba(212, 175, 55, 0.06)' : 'rgba(212, 175, 55, 0.08)',
        display: 'flex',
        flexDirection: compact ? 'row' : 'column',
        alignItems: compact ? 'center' : 'flex-start',
        gap: 1.5,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
        <InfoOutlinedIcon sx={{ color: '#d4af37', fontSize: 22 }} />
        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', flexGrow: 1 }}>
          {title}
        </Typography>
        <Chip
          icon={<VerifiedUserOutlinedIcon sx={{ fontSize: '14px !important' }} />}
          label="Institutional Compliance Notice"
          size="small"
          variant="outlined"
          sx={{
            borderColor: '#d4af37',
            color: '#b26a00',
            fontWeight: 600,
            fontSize: '0.72rem',
          }}
        />
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
        {message}
      </Typography>
      {sourceTarget && (
        <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.8 }}>
          Reference: <code>{sourceTarget}</code>
        </Typography>
      )}
    </Box>
  );
};
