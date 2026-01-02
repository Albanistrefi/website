import React from 'react';
import { BaseIcon } from './BaseIcon';

interface IconProps {
  className?: string;
  size?: number | string;
  variant?: 'default' | 'social' | 'utility';
  'aria-label'?: string;
}

export const SearchIcon: React.FC<IconProps> = ({
  className,
  size = '1.25rem',
  variant = 'utility',
  'aria-label': ariaLabel = 'Search'
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
        style={{ display: 'block' }}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    </BaseIcon>
  );
};
