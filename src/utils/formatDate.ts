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
