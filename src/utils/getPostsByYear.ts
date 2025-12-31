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
