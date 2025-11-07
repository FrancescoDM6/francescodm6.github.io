/**
 * Error handling utilities
 */

/**
 * Safely executes a function and catches errors
 * @param fn - Function to execute
 * @param fallback - Fallback value if function throws
 * @returns Result of function or fallback
 */
export function tryCatch<T>(fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch (error) {
    console.error('Error caught:', error);
    return fallback;
  }
}

/**
 * Safely executes an async function and catches errors
 * @param fn - Async function to execute
 * @param fallback - Fallback value if function throws
 * @returns Promise of result or fallback
 */
export async function tryCatchAsync<T>(
  fn: () => Promise<T>,
  fallback: T
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.error('Async error caught:', error);
    return fallback;
  }
}

/**
 * Creates a safe version of a function that won't throw
 * @param fn - Function to make safe
 * @param fallback - Fallback value if function throws
 * @returns Safe function
 */
export function makeSafe<T extends any[], R>(
  fn: (...args: T) => R,
  fallback: R
): (...args: T) => R {
  return (...args: T) => {
    try {
      return fn(...args);
    } catch (error) {
      console.error('Error in safe function:', error);
      return fallback;
    }
  };
}

/**
 * Logs an error with context
 * @param error - Error to log
 * @param context - Additional context
 */
export function logError(error: unknown, context?: string): void {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const contextMessage = context ? `[${context}] ` : '';
  console.error(`${contextMessage}Error:`, errorMessage);

  if (error instanceof Error && error.stack) {
    console.error('Stack trace:', error.stack);
  }
}

/**
 * Creates an error boundary for a code block
 * @param fn - Function to execute
 * @param onError - Error handler
 */
export function withErrorBoundary<T>(
  fn: () => T,
  onError?: (error: unknown) => void
): T | undefined {
  try {
    return fn();
  } catch (error) {
    logError(error, 'Error Boundary');
    if (onError) {
      onError(error);
    }
    return undefined;
  }
}
