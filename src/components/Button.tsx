import React from 'react';

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-describedby'?: string;
  tabIndex?: number;
}

interface ButtonProps extends BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  tabIndex
}) => {
  const getSizeClasses = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'small':
        return 'px-3 py-1.5 text-sm';
      case 'large':
        return 'px-8 py-4 text-lg';
      case 'medium':
      default:
        return 'px-6 py-3 text-[0.9375rem]';
    }
  };

  const getVariantClasses = (variant: 'primary' | 'secondary' | 'text') => {
    switch (variant) {
      case 'secondary':
        return 'bg-transparent text-accent-primary border-2 border-accent-primary hover:bg-accent-primary hover:text-background-primary';
      case 'text':
        return 'bg-transparent text-accent-primary border-0 hover:text-accent-secondary hover:underline';
      case 'primary':
      default:
        return 'bg-accent-primary text-background-primary border-0 hover:bg-accent-secondary hover:-translate-y-0.5';
    }
  };

  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-medium transition-all duration-[0.2s] ease-[ease]',
    'focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background-primary',
    'rounded-md',
    getSizeClasses(size),
    getVariantClasses(variant),
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-95'
  ].join(' ');

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      tabIndex={tabIndex}
      className={`${baseClasses} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
