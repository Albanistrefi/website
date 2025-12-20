import React from 'react';

interface BodyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Body: React.FC<BodyProps> = ({ children, className = '', as = 'p' }) => {
  const Component = as;

  return (
    <Component className={`text-text-primary font-body text-[0.9375rem] leading-[1.6] md:text-[1rem] ${className}`.trim()}>
      {children}
    </Component>
  );
};
