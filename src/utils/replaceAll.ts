import { escapeRegExp } from './escapeRegExp'

/**
 * replaceAll
 *
 * polyfill for string.prototype.replaceAll, allowing it to work in older node versions
 *
 * @param {string} str
 * @param {string} find
 * @param {string} replace
 * @returns {string}
 *
 * @since 1.0.0
 */

/*








*/

const replaceAll = (str: string, find: string, replace: string): string => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace)
}

export { replaceAll }
