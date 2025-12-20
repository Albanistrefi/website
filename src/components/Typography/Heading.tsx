import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  level: 1 | 2 | 3;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  className = '',
  level,
  as
}) => {
  const Component = as || (`h${level}` as React.ElementType);

  const getHeadingClasses = (level: 1 | 2 | 3) => {
    const baseClasses = "text-text-primary font-heading transition-colors duration-[0.2s]";

    switch (level) {
      case 1:
        return `${baseClasses} text-[1.5rem] leading-[1.3] -tracking-[0.02em] md:text-[2rem] md:leading-[1.2]`;
      case 2:
        return `${baseClasses} text-[1.125rem] leading-[1.4] -tracking-[0.01em] md:text-[1.5rem] md:leading-[1.3]`;
      case 3:
        return `${baseClasses} text-[1rem] leading-[1.4] font-medium md:text-[1.125rem]`;
      default:
        return baseClasses;
    }
  };

  return (
    <Component className={`${getHeadingClasses(level)} ${className}`.trim()}>
      {children}
    </Component>
  );
};

export const H1: React.FC<Omit<HeadingProps, 'level'>> = ({ children, className, as }) => (
  <Heading level={1} className={className} as={as}>
    {children}
  </Heading>
);

export const H2: React.FC<Omit<HeadingProps, 'level'>> = ({ children, className, as }) => (
  <Heading level={2} className={className} as={as}>
    {children}
  </Heading>
);

export const H3: React.FC<Omit<HeadingProps, 'level'>> = ({ children, className, as }) => (
  <Heading level={3} className={className} as={as}>
    {children}
  </Heading>
);
