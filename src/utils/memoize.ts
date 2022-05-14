/**
 * Memoize a function
 * @see https://github.com/emotion-js/emotion/blob/main/packages/memoize/src/index.js
 *
 * @template P Type of the prop that {@link fn} receives
 * @template T Type of the result of {@link fn}
 *
 * @param {(prop: P) => T} fn Funcrtion to be memoized
 * @returns {(prop: P) => T} Memoized function
 *
 * @since 1.1.2
 * @private
 */

/*








*/

const memoize = <P, T>(fn: (prop: P) => T): ((prop: P) => T) => {
  const cache = Object.create(null)

  return (arg: P) => {
    if (cache[arg] === undefined) cache[arg] = fn(arg)
    return cache[arg]
  }
}

export { memoize }
