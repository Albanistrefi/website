import type { CollectionEntry } from 'astro:content';

/**
 * Sort posts by publish date (newest first)
 * @param posts - Array of post entries
 * @returns Sorted array of posts
 */
export function sortPostsByDate(
  posts: CollectionEntry<'writing'>[]
): CollectionEntry<'writing'>[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.data.publishDate);
    const dateB = new Date(b.data.publishDate);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Sort posts by publish date (oldest first)
 * @param posts - Array of post entries
 * @returns Sorted array of posts
 */
export function sortPostsByDateAsc(
  posts: CollectionEntry<'writing'>[]
): CollectionEntry<'writing'>[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.data.publishDate);
    const dateB = new Date(b.data.publishDate);
    return dateA.getTime() - dateB.getTime();
  });
}

/**
 * Sort posts by title (alphabetically)
 * @param posts - Array of post entries
 * @returns Sorted array of posts
 */
export function sortPostsByTitle(
  posts: CollectionEntry<'writing'>[]
): CollectionEntry<'writing'>[] {
  return posts.sort((a, b) => a.data.title.localeCompare(b.data.title));
}
