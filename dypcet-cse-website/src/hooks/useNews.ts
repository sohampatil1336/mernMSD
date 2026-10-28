import { useMemo } from 'react';
import { departmentNewsData } from '../data/news';
import { upcomingEventsData } from '../data/events';

export const useNewsAndEvents = () => {
  return useMemo(() => ({
    news: departmentNewsData,
    events: upcomingEventsData,
  }), []);
};
