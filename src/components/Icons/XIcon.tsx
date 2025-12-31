import React from 'react';
import { BaseIcon } from './BaseIcon';

interface IconProps {
  className?: string;
  size?: number | string;
  variant?: 'default' | 'social' | 'utility';
  'aria-label'?: string;
}

export const XIcon: React.FC<IconProps> = ({
  className,
  size = '1.25rem',
  variant = 'social',
  'aria-label': ariaLabel = 'X'
}) => {
  return (
    <BaseIcon className={className} size={size} variant={variant} aria-label={ariaLabel}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2H21l-6.684 7.66L22 22h-6.077l-4.755-6.213L5.632 22H2.876l7.107-8.157L2 2h6.231l4.3 5.584L18.244 2zm-2.132 18h1.675L7.14 4H5.347l10.765 16z" />
      </svg>
    </BaseIcon>
  );
};
