/**
 * Utility function that sorts object-based responsive styles
 *
 * @param {Record<string, any>} obj Object to sort
 * @returns {Record<string, any>} The sorted object
 *
 * @since 1.0.0
 */

/*








*/

const sort = (obj: Record<string, any>): Record<string, any> => {
  const result: Record<string, any> = {}
  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base'
      })
    )
    .forEach(key => {
      result[key] = obj[key]
    })
  return result
}

export { sort }
