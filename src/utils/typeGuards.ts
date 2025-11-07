/**
 * Type guard functions for runtime type checking
 */

/**
 * Type guard to check if a value is an HTMLElement
 * @param element - Element to check
 * @returns True if element is HTMLElement
 */
export function isHTMLElement(element: unknown): element is HTMLElement {
  return element instanceof HTMLElement;
}

/**
 * Type guard to check if a value is a Node
 * @param value - Value to check
 * @returns True if value is a Node
 */
export function isNode(value: unknown): value is Node {
  return value instanceof Node;
}

/**
 * Type guard to check if a value is an Event
 * @param value - Value to check
 * @returns True if value is an Event
 */
export function isEvent(value: unknown): value is Event {
  return value instanceof Event;
}

/**
 * Type guard to check if a value is a string
 * @param value - Value to check
 * @returns True if value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Type guard to check if a value is a number
 * @param value - Value to check
 * @returns True if value is a number
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Type guard to check if a value is an object
 * @param value - Value to check
 * @returns True if value is an object
 */
export function isObject(value: unknown): value is Record<string, any> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Type guard to check if a value is an array
 * @param value - Value to check
 * @returns True if value is an array
 */
export function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}
