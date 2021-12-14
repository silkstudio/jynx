// Types
import { BaseTheme } from '../types'

// Utils
import get from 'lodash.get'

/**
 *
 * @param {string | number} value
 * @param {BaseTheme[keyof BaseTheme]} scale
 * @returns {string | number | Record<string, any>}
 */

/*








*/

const getValue = (
  value?: string | number,
  scale?: BaseTheme[keyof BaseTheme] | Record<string, any> | any[]
): string | number | Record<string, any> => {
  if (scale) {
    return value ? get(scale, value, value) : ''
  }
  return value || ''
}

export { getValue }
