/**
 * Generates a staggered animation delay in ms for list items.
 * Replaces the repeated `index * 150` pattern found across sections.
 *
 * @param {number} index - item index in a list
 * @param {number} step - ms delay between each item (default 100)
 * @param {number} max - cap the delay so long lists don't feel sluggish
 */
export const staggerDelay = (index, step = 100, max = 600) =>
  Math.min(index * step, max);

/**
 * Truncates a string to a max length, appending an ellipsis if needed.
 * @param {string} text
 * @param {number} maxLength
 */
export const truncate = (text = "", maxLength = 120) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trim()}…` : text;

/**
 * Clamp helper for numeric values (used in scroll/tilt calculations).
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
