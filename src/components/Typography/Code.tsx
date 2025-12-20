import React from 'react';

interface CodeProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Code: React.FC<CodeProps> = ({ children, className = '', as = 'code' }) => {
  const Component = as;

  return (
    <Component className={`font-code text-text-primary bg-background-secondary rounded px-1 py-0.5 text-sm leading-normal ${className}`.trim()}>
      {children}
    </Component>
  );
};
