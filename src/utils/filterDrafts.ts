import type { CollectionEntry } from 'astro:content';

/**
 * Filter out draft posts based on environment
 * In production: only published posts
 * In development: all posts (including drafts)
 * @param posts - Array of post entries
 * @returns Filtered array of posts
 */
export function filterDrafts(
  posts: CollectionEntry<'writing'>[]
): CollectionEntry<'writing'>[] {
  const isDev = import.meta.env.DEV;

  if (isDev) {
    // In development, show all posts including drafts
    return posts;
  }

  // In production, filter out drafts
  return posts.filter((post) => !post.data.draft);
}
