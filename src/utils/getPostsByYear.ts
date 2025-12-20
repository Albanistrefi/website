import type { CollectionEntry } from 'astro:content';

/**
 * Group posts by year
 * @param posts - Array of post entries
 * @returns Object with years as keys and arrays of posts as values
 */
export function groupPostsByYear(
  posts: CollectionEntry<'writing'>[]
): Record<string, CollectionEntry<'writing'>[]> {
  return posts.reduce((acc, post) => {
    const year = new Date(post.data.publishDate).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, CollectionEntry<'writing'>[]>);
}

/**
 * Get posts from a specific year
 * @param posts - Array of post entries
 * @param year - Year to filter by (number or string)
 * @returns Filtered array of posts from the specified year
 */
export function getPostsByYear(
  posts: CollectionEntry<'writing'>[],
  year: number | string
): CollectionEntry<'writing'>[] {
  const yearStr = year.toString();
  return posts.filter((post) => {
    const postYear = new Date(post.data.publishDate).getFullYear().toString();
    return postYear === yearStr;
  });
}

/**
 * Get all unique years from posts
 * @param posts - Array of post entries
 * @returns Sorted array of years (newest first)
 */
export function getYears(posts: CollectionEntry<'writing'>[]): number[] {
  const years = new Set<number>();
  posts.forEach((post) => {
    const year = new Date(post.data.publishDate).getFullYear();
    years.add(year);
  });
  return Array.from(years).sort((a, b) => b - a);
}

/**
 * Get posts count by year
 * @param posts - Array of post entries
 * @returns Object with years as keys and post counts as values
 */
export function getPostCountByYear(
  posts: CollectionEntry<'writing'>[]
): Record<string, number> {
  return posts.reduce((acc, post) => {
    const year = new Date(post.data.publishDate).getFullYear().toString();
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
