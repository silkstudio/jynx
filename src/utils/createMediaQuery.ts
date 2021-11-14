import { isNumber } from './isNumber'

/**
 * Utility function that returns a 'min-width' media query as a string
 *
 * @param {string | number} n Value to be used as the min-width. If a number is passed, px will be used as the default unit
 * @returns {string} Media query as a string
 *
 * @since 1.0.0
 *
 * @example
 *
 * // 640+
 * const fromTabletUp = createMediaQuery('640px')
 *
 */

/*








*/

const createMediaQuery = (n: number | string): string => `@media screen and (min-width: ${isNumber(n) ? `${n}px` : n})`

export { createMediaQuery }
