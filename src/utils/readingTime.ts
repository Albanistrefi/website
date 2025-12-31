import readingTime from 'reading-time';

/**
 * Get reading time as a formatted string
 * @param content - The text content to analyze
 * @returns Formatted reading time string (e.g., "5 min read")
 */
export function getReadingTimeText(content: string): string {
  const stats = readingTime(content);
  return stats.text;
}

/**
 * Get reading time in minutes (rounded)
 * @param content - The text content to analyze
 * @returns Reading time in minutes
 */
export function getReadingTimeMinutes(content: string): number {
  const stats = readingTime(content);
  return Math.ceil(stats.minutes);
}
