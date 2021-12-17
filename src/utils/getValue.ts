// Types
import type { DefaultTheme } from '../types/theme'

// Utils
import get from 'lodash.get'

/**
 *
 * @param {string | number} value
 * @param {DefaultTheme[keyof DefaultTheme]} scale
 * @returns {any}
 */

/*








*/

const getValue = (value: string | number = '', scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]): any => {
  if (scale) {
    return value === 0 ? get(scale, 0, value) : get(scale, value, value)
  }
  return value
}

export { getValue }
