/**
 * Custom Type Definitions
 *
 * This file contains shared TypeScript type definitions used across the application.
 */

/**
 * Blog post metadata
 */
export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
  author?: string;
  readingTime?: string;
}

/**
 * Blog post with content
 */
export interface Post extends PostMetadata {
  content: string;
}

/**
 * Navigation link
 */
export interface NavLink {
  label: string;
  href: string;
}

/**
 * Site configuration
 */
export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

/**
 * Component props with optional className
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
