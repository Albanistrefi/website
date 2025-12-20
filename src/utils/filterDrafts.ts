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

/**
 * Filter to only get published posts (excludes drafts)
 * @param posts - Array of post entries
 * @returns Filtered array of published posts
 */
export function getPublishedPosts(
  posts: CollectionEntry<'writing'>[]
): CollectionEntry<'writing'>[] {
  return posts.filter((post) => !post.data.draft);
}

/**
 * Filter to only get draft posts
 * @param posts - Array of post entries
 * @returns Filtered array of draft posts
 */
export function getDraftPosts(
  posts: CollectionEntry<'writing'>[]
): CollectionEntry<'writing'>[] {
  return posts.filter((post) => post.data.draft);
}

/**
 * Check if a post is published
 * @param post - Post entry
 * @returns True if post is published (not a draft)
 */
export function isPublished(post: CollectionEntry<'writing'>): boolean {
  return !post.data.draft;
}
