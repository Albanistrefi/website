import React from 'react';
import { BaseIcon } from './BaseIcon';

interface IconProps {
  className?: string;
  size?: number | string;
  variant?: 'default' | 'social' | 'utility';
  'aria-label'?: string;
}

export const ClockIcon: React.FC<IconProps> = ({
  className,
  size = '0.875rem',
  variant = 'utility',
  'aria-label': ariaLabel = 'Reading time'
}) => {
  return (
    <BaseIcon className={className} size={size} variant={variant} aria-label={ariaLabel}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12,6 12,12 16,14"></polyline>
      </svg>
    </BaseIcon>
  );
};
