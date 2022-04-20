/**
 * Utility function tat retrieves a nested property from an object based on string or numeric path
 *
 * @template T [=any] Used to define the return type of the function
 *
 * @param {any} obj Object which the required value is nested within
 * @param {string | number} path String or numeric path to the desired property
 * @param {T} fallback A value to use if the provided path does not lead to a value
 * @returns {T} Either the value found at the specified path or the fallback value
 *
 * @since 1.1.0
 */

/*








*/

const get = <T = any>(obj: any, path: string | number, fallback?: T): T => {
  const key = typeof path === 'string' ? path.split('.') : [path]

  let result: any = obj

  for (let i = 0; i < key.length; i += 1) {
    if (!result) {
      break
    }

    result = result[key[i]]
  }

  return result === undefined ? fallback : result
}

export { get }
