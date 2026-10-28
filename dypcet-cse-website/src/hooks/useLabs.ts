import { useMemo } from 'react';
import { laboratoriesData } from '../data/labs';

export const useLabs = () => {
  return useMemo(() => laboratoriesData, []);
};
