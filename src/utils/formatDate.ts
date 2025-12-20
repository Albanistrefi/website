import { format } from 'date-fns';

/**
 * Format a date to a human-readable string
 * @param date - Date object or date string
 * @param formatStr - Optional date-fns format string (default: "MMMM d, yyyy")
 * @returns Formatted date string (e.g., "January 15, 2025")
 */
export function formatDate(date: Date | string, formatStr: string = 'MMMM d, yyyy'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, formatStr);
}

/**
 * Format a date to ISO format (YYYY-MM-DD)
 * @param date - Date object or date string
 * @returns ISO formatted date string
 */
export function formatDateISO(date: Date | string): string {
  return formatDate(date, 'yyyy-MM-dd');
}

/**
 * Format a date to a short format (e.g., "Jan 15, 2025")
 * @param date - Date object or date string
 * @returns Short formatted date string
 */
export function formatDateShort(date: Date | string): string {
  return formatDate(date, 'MMM d, yyyy');
}

/**
 * Get relative time from now (e.g., "2 days ago")
 * @param date - Date object or date string
 * @returns Relative time string
 */
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours === 0) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      if (diffInMinutes === 0) {
        return 'just now';
      }
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  } else if (diffInDays === 1) {
    return 'yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
}
