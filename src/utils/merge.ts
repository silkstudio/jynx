/**
 * Utility funtion that takes in objects and returns the combined object
 *
 * @param {Record<string, any>[]} objects Pass as many objects as you like. All objects passed will be merged into the final returned value.
 * @returns {Record<string, any>} The final merged object
 *
 * @since 1.0.0
 * @private
 */

/*








*/

export const merge = (...objects: (Record<string, any> | undefined)[]): Record<string, any> =>
  objects.reduce((prev, curr) => ({ ...prev, ...curr }), {}) || {}
