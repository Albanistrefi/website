/**
 * Test file to verify path alias configuration
 */
import type { PostMetadata, SiteConfig } from '@/types';

// This file is used to test that path aliases (@/*) resolve correctly
export const testImport = (): boolean => {
  const metadata: PostMetadata = {
    title: 'Test Post',
    date: '2025-10-31',
    excerpt: 'Test excerpt',
    slug: 'test-post'
  };

  const config: SiteConfig = {
    title: 'Test Site',
    description: 'Test description',
    author: 'Test Author',
    url: 'https://example.com'
  };

  return metadata.title === 'Test Post' && config.title === 'Test Site';
};
