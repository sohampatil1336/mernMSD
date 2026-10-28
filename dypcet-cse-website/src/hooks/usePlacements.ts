import { useMemo } from 'react';
import { placementStatistics, topRecruiters, notablePlacements, placementReportPdf } from '../data/placements';

export const usePlacements = () => {
  return useMemo(() => ({
    statistics: placementStatistics,
    recruiters: topRecruiters,
    notable: notablePlacements,
    reportPdf: placementReportPdf,
  }), []);
};
