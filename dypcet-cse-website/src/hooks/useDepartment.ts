import { useMemo } from 'react';
import { departmentData } from '../data/department';

export const useDepartment = () => {
  return useMemo(() => departmentData, []);
};
