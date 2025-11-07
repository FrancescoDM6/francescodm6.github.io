/**
 * Utility functions for safe data handling and error prevention
 */

/**
 * Safely converts a value to a Date object
 * @param date - Date value to convert
 * @param fallback - Fallback date if conversion fails
 * @returns Valid Date object
 */
export function safeDate(date: Date | string | undefined, fallback: Date = new Date()): Date {
  if (!date) return fallback;

  try {
    const parsed = new Date(date);
    return isNaN(parsed.getTime()) ? fallback : parsed;
  } catch {
    return fallback;
  }
}

/**
 * Safely converts a value to an array
 * @param value - Value to convert to array
 * @returns Array or empty array if value is null/undefined
 */
export function safeArray<T>(value: T[] | undefined | null): T[] {
  return Array.isArray(value) ? value : [];
}

/**
 * Safely gets a value from an object
 * @param obj - Object to get value from
 * @param key - Key to get
 * @param fallback - Fallback value if key doesn't exist
 * @returns Value or fallback
 */
export function safeGet<T>(obj: any, key: string, fallback: T): T {
  try {
    return obj?.[key] ?? fallback;
  } catch {
    return fallback;
  }
}

/**
 * Validates if a date is valid
 * @param date - Date to validate
 * @returns True if date is valid
 */
export function isValidDate(date: unknown): date is Date {
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Safely parses JSON
 * @param json - JSON string to parse
 * @param fallback - Fallback value if parsing fails
 * @returns Parsed object or fallback
 */
export function safeJSONParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

/**
 * Safely stringifies an object
 * @param obj - Object to stringify
 * @param fallback - Fallback string if stringification fails
 * @returns JSON string or fallback
 */
export function safeJSONStringify(obj: any, fallback: string = '{}'): string {
  try {
    return JSON.stringify(obj);
  } catch {
    return fallback;
  }
}

/**
 * Checks if a value is a non-empty string
 * @param value - Value to check
 * @returns True if value is a non-empty string
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Truncates a string to a maximum length
 * @param str - String to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add if truncated
 * @returns Truncated string
 */
export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}
