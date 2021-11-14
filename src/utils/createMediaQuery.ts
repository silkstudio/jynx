/**
 * Function that returns a 'min-width' media query as a string
 *
 * @param {string} n Value to be used as the min-width
 * @returns {string} Media query as a string
 *
 * @since 1.0.0
 *
 * @example
 *
 * // 640+
 * const fromTabletUp = createMediaQuery('640px')
 */

/*








*/

export const createMediaQuery = (n: string): string => `@media screen and (min-width: ${n})`
