import React from 'react';

interface BaseIconProps {
  children: React.ReactNode;
  className?: string;
  size?: number | string;
  variant?: 'default' | 'social' | 'utility';
  'aria-label'?: string;
}

export const BaseIcon: React.FC<BaseIconProps> = ({
  children,
  className = '',
  size = '1.25rem',
  variant = 'default',
  'aria-label': ariaLabel
}) => {
  const getVariantClasses = (variant: 'default' | 'social' | 'utility') => {
    switch (variant) {
      case 'social':
        return 'text-text-primary transition-all duration-[0.2s] ease-[ease] hover:text-accent-primary hover:scale-110';
      case 'utility':
        return 'text-text-secondary transition-colors duration-[0.2s] ease-[ease] hover:text-text-primary';
      case 'default':
      default:
        return 'text-text-primary transition-colors duration-[0.2s] ease-[ease] hover:text-accent-primary';
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center flex-shrink-0 ${getVariantClasses(variant)} ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    >
      {children}
    </span>
  );
};
