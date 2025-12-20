import React from 'react';

interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Blockquote: React.FC<BlockquoteProps> = ({ children, className = '', as = 'blockquote' }) => {
  const Component = as;

  return (
    <Component className={`border-l-4 border-accent-primary pl-4 italic text-text-secondary font-body text-[0.9375rem] leading-[1.6] md:text-[1rem] ${className}`.trim()}>
      {children}
    </Component>
  );
};
