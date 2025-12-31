import React from 'react';

interface BaseLinkProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface LinkProps extends BaseLinkProps {
  href: string;
  variant?: 'default' | 'navigation' | 'unstyled';
  external?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  showExternalIcon?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  external = false,
  showExternalIcon = true,
  children,
  className = '',
  href,
  target,
  rel,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  tabIndex,
  onClick
}) => {
  const isExternalUrl = external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  const shouldShowExternalIcon = showExternalIcon && isExternalUrl && !href.startsWith('mailto:') && !href.startsWith('tel:');

  const getVariantClasses = (variant: 'default' | 'navigation' | 'unstyled') => {
    switch (variant) {
      case 'navigation':
        return [
          'relative text-text-primary transition-all duration-[0.2s] ease-[ease] hover:text-accent-primary',
          'after:content-[\'\'] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full',
          'after:bg-accent-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-[0.2s] after:ease-[ease]',
          'hover:after:scale-x-100'
        ].join(' ');
      case 'unstyled':
        return 'transition-colors duration-[0.2s] ease-[ease]';
      case 'default':
      default:
        return 'text-accent-primary transition-colors duration-[0.2s] ease-[ease] hover:text-accent-secondary hover:underline underline-offset-2 decoration-1';
    }
  };

  const linkClasses = getVariantClasses(variant);

  return (
    <a
      href={href}
      target={isExternalUrl ? (target || '_blank') : target}
      rel={isExternalUrl ? (rel || 'noopener noreferrer') : rel}
      className={`${linkClasses} ${className}`.trim()}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {children}
      {shouldShowExternalIcon && (
        <span className="ml-1 text-xs" aria-hidden="true">
          ↗
        </span>
      )}
    </a>
  );
};

export default Link;
