import { useState, useEffect } from 'react';
import { projectTypes } from '@/data/projectTypes';

export type ProjectType = 'website' | 'webapp' | 'pwa' | 'ecommerce';
export type ProjectScope = 'new' | 'restyling';

export const usePriceCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [projectScope, setProjectScope] = useState<ProjectScope>('new');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  useEffect(() => {
    if (projectType) {
      const basePrice = projectTypes[projectType].basePrice;
      const scopeMultiplier = projectScope === 'restyling' ? 0.6 : 1;
      setEstimatedPrice(basePrice * scopeMultiplier);
    } else {
      setEstimatedPrice(0);
    }
  }, [projectType, projectScope]);

  return {
    projectType,
    setProjectType,
    projectScope,
    setProjectScope,
    estimatedPrice,
  };
};