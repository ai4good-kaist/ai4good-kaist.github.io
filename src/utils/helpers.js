/**
 * Utility functions for the site.
 */

/**
 * Format a date string (YYYY-MM-DD) to a readable format.
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(dateStr, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  return new Date(dateStr).toLocaleDateString('en-US', defaultOptions);
}

/**
 * Format a date range (e.g., "April 18–19, 2026").
 */
export function formatDateRange(startStr, endStr) {
  if (!endStr) return formatDate(startStr);

  const start = new Date(startStr);
  const end = new Date(endStr);

  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    // Same month: "April 18–19, 2026"
    const month = start.toLocaleDateString('en-US', { month: 'long' });
    return `${month} ${start.getDate()}–${end.getDate()}, ${start.getFullYear()}`;
  }

  return `${formatDate(startStr)} – ${formatDate(endStr)}`;
}

/**
 * Get unique years from publications, sorted descending.
 */
export function getUniqueYears(publications) {
  const years = [...new Set(publications.map((p) => p.year))];
  return years.sort((a, b) => b - a);
}

/**
 * Generate initials from a name for avatar fallback.
 */
export function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
