/**
 * Creates a Promise that resolves after the specified delay.
 * @param {number} ms - The delay duration in milliseconds
 * @returns {Promise<void>} A Promise that resolves after the delay
 * @throws {Error} If ms is negative or not a number
 */
export const wait = (ms) => {
  if (typeof ms !== "number" || ms < 0) {
    throw new Error("Delay must be a non-negative number");
  }
  if (ms > 300000) {
    // 5 minutes
    throw new Error("Delay exceeds maximum allowed duration");
  }
  return new Promise((resolve) => setTimeout(resolve, ms));
};
