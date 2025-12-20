import readingTime from 'reading-time';

/**
 * Calculate reading time for a piece of content
 * @param content - The text content to analyze
 * @returns Reading time object with text, minutes, and words
 */
export function getReadingTime(content: string) {
  return readingTime(content);
}

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

/**
 * Get word count from content
 * @param content - The text content to analyze
 * @returns Word count
 */
export function getWordCount(content: string): number {
  const stats = readingTime(content);
  return stats.words;
}

/**
 * Format reading time with custom text
 * @param content - The text content to analyze
 * @param format - Format string (use {minutes} as placeholder)
 * @returns Formatted reading time string
 */
export function formatReadingTime(content: string, format: string = '{minutes} min read'): string {
  const minutes = getReadingTimeMinutes(content);
  return format.replace('{minutes}', minutes.toString());
}
