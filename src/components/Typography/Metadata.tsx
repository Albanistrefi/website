import React from 'react';

interface MetadataProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Metadata: React.FC<MetadataProps> = ({ children, className = '', as = 'span' }) => {
  const Component = as;

  return (
    <Component className={`text-text-secondary font-body text-[0.75rem] leading-[1.4] md:text-[0.8125rem] ${className}`.trim()}>
      {children}
    </Component>
  );
};
