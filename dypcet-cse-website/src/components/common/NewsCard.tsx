import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import { NewsNoticeItem } from '../../types';
import { motion } from 'framer-motion';

interface NewsCardProps {
  item: NewsNoticeItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Placements': return '#1b5e20';
      case 'Academic': return '#0b2850';
      case 'Achievements': return '#800020';
      case 'Events': return '#d4af37';
      default: return '#455a64';
    }
  };

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} style={{ height: '100%' }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderLeft: item.isImportant ? '4px solid #800020' : undefined,
        }}
      >
        <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, gap: 1 }}>
            <Chip
              label={item.category}
              size="small"
              sx={{
                bgcolor: getCategoryColor(item.category),
                color: item.category === 'Events' ? '#1a1a1a' : '#ffffff',
                fontWeight: 700,
                fontSize: '0.7rem',
              }}
            />
            {item.isImportant && (
              <Chip
                icon={<CampaignOutlinedIcon sx={{ fontSize: '14px !important', color: '#800020 !important' }} />}
                label="Important"
                size="small"
                variant="outlined"
                sx={{ borderColor: '#800020', color: '#800020', fontWeight: 700, fontSize: '0.68rem' }}
              />
            )}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1, lineHeight: 1.35 }}>
            {item.title}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
            {item.description}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mt: 'auto', pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
            <CalendarTodayOutlinedIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              {item.date}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
