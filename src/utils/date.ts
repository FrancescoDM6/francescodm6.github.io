/**
 * Formats a Date into a human-readable medium date string.
 * Returns null/undefined when no date is provided.
 */
export const formatDate = (date: Date | undefined, locale = 'en-US'): string | null =>
    date ? new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date) : null;
