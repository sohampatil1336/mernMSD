import React from 'react';
import { Box, Skeleton, Grid } from '@mui/material';

interface LoadingSkeletonProps {
  count?: number;
  type?: 'card' | 'table' | 'text';
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ count = 3, type = 'card' }) => {
  if (type === 'table') {
    return (
      <Box sx={{ width: '100%', my: 2 }}>
        <Skeleton variant="rectangular" height={52} sx={{ mb: 1, borderRadius: 1 }} />
        {Array.from({ length: count }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" height={42} sx={{ mb: 0.8, borderRadius: 1 }} />
        ))}
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {Array.from({ length: count }).map((_, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
            <Skeleton variant="rectangular" height={180} sx={{ mb: 2, borderRadius: 1 }} />
            <Skeleton variant="text" width="60%" height={28} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="90%" height={20} />
            <Skeleton variant="text" width="80%" height={20} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" height={36} sx={{ borderRadius: 1 }} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
