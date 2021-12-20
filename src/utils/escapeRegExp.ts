/**
 * escapeRegExp
 *
 * @param {string} str
 * @returns {string}
 *
 * @since 1.0.0
 */

/*








*/

const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export { escapeRegExp }
