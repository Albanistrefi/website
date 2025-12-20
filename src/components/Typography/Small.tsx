import React from 'react';

interface SmallProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Small: React.FC<SmallProps> = ({ children, className = '', as = 'span' }) => {
  const Component = as;

  return (
    <Component className={`text-text-primary font-body text-[0.8125rem] leading-[1.5] md:text-[0.875rem] ${className}`.trim()}>
      {children}
    </Component>
  );
};
