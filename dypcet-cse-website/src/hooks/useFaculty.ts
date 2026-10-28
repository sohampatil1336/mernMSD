import { useMemo } from 'react';
import { facultyData } from '../data/faculty';

export const useFaculty = () => {
  return useMemo(() => facultyData, []);
};
