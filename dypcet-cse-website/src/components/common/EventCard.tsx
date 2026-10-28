import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { UpcomingEvent } from '../../types';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: UpcomingEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} style={{ height: '100%' }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          overflow: 'hidden',
        }}
      >
        {/* Date block */}
        <Box
          sx={{
            width: { xs: '100%', sm: 120 },
            backgroundColor: 'primary.main',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>
            Schedule
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 800, mt: 0.5, lineHeight: 1.2 }}>
            {event.date}
          </Typography>
        </Box>

        {/* Content */}
        <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
            {event.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flexGrow: 1 }}>
            {event.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 16, color: 'secondary.main' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                {event.venue}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PersonOutlineIcon sx={{ fontSize: 16, color: 'primary.main' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                {event.organizer}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
