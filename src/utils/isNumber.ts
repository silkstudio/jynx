/**
 * Utility function that determines whether a given value is a number _(or a string-based number)_
 *
 * @param {any} value Value to check
 * @returns {value is number} True if `value` is a number
 *
 * @since 1.0.0

 */

/*








*/

const isNumber = (value: any): value is number => typeof value === 'number' || parseFloat(value) !== NaN

export { isNumber }
