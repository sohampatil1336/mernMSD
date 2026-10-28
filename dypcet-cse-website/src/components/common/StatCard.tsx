import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  prefix = '',
  suffix = '',
  description,
  icon,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayCount(value);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          sx={{
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            p: 1,
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
                : 'linear-gradient(180deg, #101d36 0%, #0a1324 100%)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: 4,
              backgroundColor: 'warning.main',
            }}
          />
          <CardContent sx={{ pb: '16px !important' }}>
            {icon && (
              <Box sx={{ color: 'primary.main', mb: 1, display: 'flex', alignItems: 'center' }}>
                {icon}
              </Box>
            )}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'baseline',
                mb: 0.5,
              }}
            >
              <span>{prefix}</span>
              <span>{displayCount.toLocaleString()}</span>
              <span style={{ color: '#d4af37', fontSize: '0.85em', marginLeft: 2 }}>{suffix}</span>
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
              {label}
            </Typography>
            {description && (
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                {description}
              </Typography>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
